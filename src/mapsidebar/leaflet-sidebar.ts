import * as L from "leaflet";
import type * as geojson from 'geojson';
import "leaflet/dist/leaflet.css";
import "sidebar-v2/css/leaflet-sidebar.css";

import "sidebar-v2/js/leaflet-sidebar.js";
import "./leaflet-tilelayer-wmts-src.js";
import { WMTS } from "./leaflet-tilelayer-wmts-src";

type NonMethodKeys<T> = {[P in keyof T]: T[P] extends Function ? never : P }[keyof T];  
type RemoveMethods<T> = Pick<T, NonMethodKeys<T>>; 

export class Sidebar {
    t:any
    control:L.Control
    evented:L.Evented
    constructor(id:string, options: L.ControlOptions) {
        this.t = new (<any>L.Control).Sidebar(id, options);
        this.control =  <L.Control>this.t;
        this.evented =  <L.Evented>this.t;
    }
    on(type: string,fn: (this:Sidebar, event: L.LeafletEvent) => void) {
        return this.evented.on(type, fn, this);
    }
    getPanes() {
        return this.t._panes as HTMLElement[];
    }
    getActive() {
        return this.getPanes().filter((p:HTMLElement)=>p.classList.contains("active"))
    }
    getDiv() {
        return this.t._sidebar as HTMLElement;
    }
    getMap() {
        return this.t._map as SBMap;
    }
}

class Layer extends L.Layer {
    id?: string;
}

export class SBConf {
    id?: string;
    layer?: Layer;
    map?: SBMap;
    metadata?:any;
    onEachFeature?(this: SBConf, f: geojson.Feature, l: Layer): void;
    popupopen?(this: SBConf, e: L.LeafletMouseEvent): void;
    mouseover?(this: SBConf, e: L.LeafletMouseEvent): void;
    mouseout?(this: SBConf, e: L.LeafletMouseEvent): void;
    click?(this: SBConf, e: L.LeafletMouseEvent): void;
    contextmenu?(this: SBConf, e: L.LeafletMouseEvent): void;
    filter?(this: SBConf, geoJsonFeature: geojson.Feature<geojson.GeometryObject>): boolean;
    pointToLayer?(geoJsonPoint: geojson.Feature<geojson.Point, any>, latlng: L.LatLng): Layer;
    style?: L.PathOptions | L.StyleFunction | undefined;
    constructor(obj?: Partial<SBConf>) {
        if (obj != undefined) Object.assign(this, obj);
    };
    public static readonly events = [
        "mouseover",
        "mouseout",
        "click",
        "contextmenu",
        "popupopen"
    ];
    public static readonly options = [
        "pointToLayer",
        "style",
        "onEachFeature",
        "filter",
        "coordsToLatLng",
        "markersInheritOptions",
    ]
    values(arr: string[]) {
        const vals: Array<Array<any>> = [];
        arr.forEach(e => {
            if (!(e in this)) return;
            let v: any = this[e as keyof SBConf]
            if (v == null || v == undefined) return;
            if (typeof v === "function") v = v.bind(this);
            vals.push([e, v]);
        });
        return vals;
    }
    toEvents() {
        const events: L.LeafletEventHandlerFnMap = {};
        this.values(SBConf.events).forEach(([k, v]) => {
            events[k as keyof L.LeafletEventHandlerFnMap] = v;
        })
        return events;
    };
    toOptions() {
        const options: L.GeoJSONOptions = {};
        this.values(SBConf.options).forEach(([k, v]) => {
            options[k as keyof L.GeoJSONOptions] = v;
        })
        return options
    }
}

export class SBMap extends L.Map {
    idlayer: Map<string, Layer>
    sidebar: Sidebar

    constructor(element: string | HTMLElement, idsidebar:string, options?: L.MapOptions) {
        super(element, options);
        this.idlayer = new Map<string, Layer>();
        const ly = new WMTS("https://www.ign.es/wmts/ign-base", {
            id: "capa.base",
            attribution: "CC BY 4.0 <a target='_blank' href='http://www.scne.es/'>SCNE</a>, <a target='_blank' href='http://www.ign.es'>IGN</a>",
            maxZoom: 20,
            crossOrigin: true,
            wmtsParams: {
                layer: "IGNBaseTodo",
                tilematrixSet: "GoogleMapsCompatible",
                format: "image/png",
            }
        })
        this.addIdLayer("capa.base", ly);
        if (
            this.attributionControl &&
            this.attributionControl.options &&
            this.attributionControl.options.prefix &&
            (typeof this.attributionControl.options.prefix === "string")
        ) {
            this.attributionControl.options.prefix =
                this.attributionControl.options.prefix
                    .replace(/ href=/g, ' target="_blank" href=')
                    .replace(/<svg.*?<\/svg>/g, "");
        }
        this.sidebar = new Sidebar(idsidebar, {});
        this.addControl(this.sidebar.control);
    }
    setAttributionControlPrefix(txt: string) {
        if (this.attributionControl==null) this.attributionControl = new L.Control.Attribution();
        if (this.attributionControl.options==null) this.attributionControl.options = {} as L.Control.AttributionOptions;
        this.attributionControl.options.prefix = txt.trim();
    }
    resetLayers() {
        const ok = ["mapbox.streets", "capa.base"];
        this.eachLayer((layer) => {
            const ly = (<Layer>layer);
            if (
                ly.id == undefined ||
                !ok.includes(ly.id)
            ) this.removeLayer(layer);
        });
        this.idlayer = new Map<string, Layer>();
    }
    addGeoJson(gjson: geojson.GeoJsonObject | string, conf: SBConf|RemoveMethods<SBConf>) {
        if (typeof gjson === "string") {
            const t = this;
            (async function (layer: string, conf: any) {
                const response = await fetch(layer);
                const dt_layer = await response.json();
                t.addGeoJson(dt_layer, conf);
            }.call(this, gjson, conf));
            return;
        }
        if (conf == null) conf = new SBConf();
        else if (!(conf instanceof SBConf)) conf = new SBConf(conf);
        if (!(conf instanceof SBConf)) return;
        conf.map = this;
        const options: L.GeoJSONOptions = conf.toOptions();
        const events: L.LeafletEventHandlerFnMap = conf.toEvents();
        const layer = L.geoJSON(gjson, options);
        if (conf.id) (<Layer>layer).id = conf.id;
        //layer.conf = conf;
        conf.layer = layer;
        if (Object.keys(events).length) layer.on(events);
        this.addLayer(layer);
        if (typeof conf.id === "string") {
            this.idlayer.set(conf.id, layer);
        }
        return layer;
    }
    findBound() {
        const arr: L.LatLng[] = [];
        const get_latlon = (l:L.Layer) => {
            if (l instanceof L.CircleMarker) return l.getLatLng();
            if (l instanceof L.DivOverlay) return l.getLatLng();
            if (l instanceof L.Marker) return l.getLatLng();
            return undefined;
        }
        this.eachLayer((l)=>{
            const latlon = get_latlon(l);
            if (latlon!=undefined) arr.push(latlon);
        })
        if (arr.length>0) return L.latLngBounds(arr);
        const bds = Array.from(this.idlayer.values()).flatMap((l)=>{
            if (!(l instanceof L.FeatureGroup)) return [];
            const b = l.getBounds();
            return (Object.keys(b).length)?b:[];
        })
        if (bds.length>0) return bds[0];
        console.log("MAP.findBound = null");
        return null;
    }
    center() {
        const bounds = this.findBound();
        if (bounds==null) return false;
        const opt = (()=>{
            const aux1 = document.querySelector(".leaflet-bottom.leaflet-right");
            const aux2 = document.querySelector("#sidebar");
            if (!((aux1 instanceof HTMLElement) && (aux2 instanceof HTMLElement))) return null;
            const bottom = Math.floor(
                aux1.offsetHeight
            );
            const left = Math.floor(
                aux2.offsetWidth / 3
            );
            const opt: L.FitBoundsOptions = {
                paddingTopLeft: [left, 0],
                paddingBottomRight: [bottom, bottom],
            };
            return opt;
        })();
        if (opt!=null) this.fitBounds(bounds, opt);
        else this.fitBounds(bounds);
        console.log("MAP.center", bounds);
        return true;
    }
    getLayersIds() {
        const ids = new Set();
        this.eachLayer((l) => {
            if ((l instanceof Layer) && l.id != null) ids.add(l.id);
        });
        return [...ids].sort();
    }
    addIdLayer(id: string, layer: L.Layer) {
        const ly = layer as Layer;
        ly.id = id;
        this.idlayer.set(id, ly);
        return super.addLayer(ly);
    }
    removeLayerById(id: string) {
        const layer = this.idlayer.get(id);
        if (layer == null) {
            //console.warn(`layer[id=${id}] not found`);
            return;
        }
        this.removeLayer(layer);
        this.idlayer.delete(id);
    }
}

