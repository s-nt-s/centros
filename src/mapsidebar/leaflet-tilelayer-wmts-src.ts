import * as L from "leaflet";

// Adaptación de https://gitlab.com/IvanSanchez/cuantotardamiautobus/-/raw/master/src/madrid/lib/leaflet-tilelayer-wmts-src.js

export class WmtsParam {
  service: string
  request: string
  version: string
  layer?: string
  format?: string
  width?: number
  height?: number
  tilematrixSet?: string
  constructor(options?:{}) {
    this.service = "WMTS";
    this.request = "GetTile";
    this.version = "1.0.0";
    this.format = "image/jpeg";
    if (options!=null) Object.assign(this, options);
  }
}

interface WMTSTileLayerOptions extends L.TileLayerOptions {
  matrixIds?: any
  crs?: any
  wmtsParams: WmtsParam|object
}

interface MatrixId {
  identifier: number,
  topLeftCorner: L.LatLng
}


export class WMTS extends L.TileLayer {
  id?: string;
  wmtsParams?: object
  matrixIds?: Array<MatrixId>
  _crs?: any
  _url?: string

  constructor(urlTemplate: string, options?: WMTSTileLayerOptions) {
    super(urlTemplate, options);
    this._url = urlTemplate;
  }

  _getSubdomain(tilePoint: L.Point) {
    if (this.options == null || this.options.subdomains == null) return null;
    const index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
    return this.options.subdomains[index];
  }

  initialize(url: string, options: WMTSTileLayerOptions) {
    // (String, Object)
    if (!(options.wmtsParams instanceof WmtsParam)) options.wmtsParams = new WmtsParam(options.wmtsParams);
    if (!(options.wmtsParams instanceof WmtsParam)) return;
    const tileSize = (options.tileSize || this.options.tileSize) as number;
    let wh = null;
    if (options.detectRetina && L.Browser.retina) {
      wh = tileSize * 2;
    } else {
      wh = tileSize;
    }
    if (options.wmtsParams.width == null) options.wmtsParams.width = wh;
    if (options.wmtsParams.height == null) options.wmtsParams.height = wh;
    L.setOptions(this, options);
  }

  onAdd(map: L.Map) {
    this._crs = (<WMTSTileLayerOptions>this.options).crs || map.options.crs;
    L.TileLayer.prototype.onAdd.call(this, map);
    return this;
  }

  getTileUrl(coords: L.Coords) {
    const opt = (<WMTSTileLayerOptions>this.options);
    const matrixIds = opt.matrixIds || this.getDefaultMatrix();
    const tileSize = opt.tileSize as number;
    const nwPoint = coords.multiplyBy(tileSize);
    nwPoint.x += 1;
    nwPoint.y -= 1;
    const sePoint = nwPoint.add(new L.Point(tileSize, tileSize));
    const zoom = this._tileZoom as number;
    const nw = this._crs.project(this._map.unproject(nwPoint, zoom));
    const se = this._crs.project(this._map.unproject(sePoint, zoom));
    const tilewidth = se.x - nw.x;
    //zoom = this._map.getZoom();
    const ident = matrixIds[zoom].identifier;

    // HACK!! En cartociudad esto falla si el tilematrix incluye el tilematrixset
    //         var tilematrix = this.wmtsParams.tilematrixSet + ":" + ident;
    const tilematrix = ident;
    const X0 = matrixIds[zoom].topLeftCorner.lng;
    const Y0 = matrixIds[zoom].topLeftCorner.lat;
    const tilecol = Math.floor((nw.x - X0) / tilewidth);
    const tilerow = -Math.floor((nw.y - Y0) / tilewidth);
    const base = L.Util.template(this._url as string, { s: this._getSubdomain(coords) });
    const url = base +
      L.Util.getParamString(opt.wmtsParams, base) +
      "&tilematrix=" +
      tilematrix +
      "&tilerow=" +
      tilerow +
      "&tilecol=" +
      tilecol;
    return url;
  }

  getDefaultMatrix() {
    /**
     * the matrix3857 represents the projection
     * for in the IGN WMTS for the google coordinates.
     */
    const matrixIds3857 = new Array<MatrixId>(22);
    for (let i = 0; i < 22; i++) {
      matrixIds3857[i] = {
        identifier: i,
        topLeftCorner: new L.LatLng(20037508.3428, -20037508.3428),
      };
    }
    return matrixIds3857;
  }

}
