import Leaflet from "leaflet";

import icon from "../assets/mapIcon.svg";

const mapIcon = Leaflet.icon({
  iconUrl: icon,

  iconSize: [38, 38],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});
export default mapIcon;
