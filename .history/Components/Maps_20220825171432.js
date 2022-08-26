import React, { useState } from "react";
import Map from "react-map-gl";
import { getCenter } from "geolib";

function Maps({ SearchResults }) {
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",

    longitude: -100,
    latitude: 40,
    zoom: 8,
  });

  // transform the search results object into the
  // {latitude: 52,516272 and longitude: 13,377772} object

  // this is implicit return through map....
  const coordinates = SearchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/sehajbindra8/cl78tl7ey000w15mg1k3ip43y"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
      // style={{ width: 600, height: 600 }}
      attributionControl={false}
    ></Map>
  );
}

export default Maps;
