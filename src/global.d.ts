import { SBMap } from "./mapsidebar/leaflet-sidebar";

export {};

declare global {
  interface Window {
    MAP: SBMap
  }
}
