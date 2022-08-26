import React from "react";
import Map from "react-map-gl";

function Map() {
  return (
    <Map
      mapStyle="mapbox://styles/sehajbindra8/cl78tl7ey000w15mg1k3ip43y"
      mapboxAccessToken={process.env.mapbox_key}
    ></Map>
  );
}

export default Map;
