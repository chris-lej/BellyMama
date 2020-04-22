import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import {
  GridLayer,
  withLeaflet
} from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
  createLeafletElement(props) {
    return L.mapboxGL(props);
  }
};

MapBoxGLLayer.defaultProps = {
  style: "mapbox://styles/clejeunemeister/ck8nil7h11flp1irx3o7bkofp"
};

export default withLeaflet(MapBoxGLLayer);
