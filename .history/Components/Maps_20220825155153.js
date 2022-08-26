import React, { useState } from "react";
import Map from "react-map-gl";

function Maps() {
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",

    longitude: -100,
    latitude: 40,
    zoom: 8,
  });

  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/sehajbindra8/cl78tl7ey000w15mg1k3ip43y"
      mapboxAccessToken={process.env.mapbox_key}
    ></Map>
  );
}

export default Maps;
