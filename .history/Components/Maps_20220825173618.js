import React, { useState } from "react";
import Map from "react-map-gl";
import { Marker, Popup } from "mapbox-gl";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/solid";

function Maps({ SearchResults }) {
  // transform the search results object into the
  // {latitude: 52,516272 and longitude: 13,377772} object

  // this is implicit return through map....
  const coordinates = SearchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  console.log(coordinates);

  const center = getCenter(coordinates);
  console.log(center);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",

    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 8,
  });
  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/sehajbindra8/cl78tl7ey000w15mg1k3ip43y"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
      // style={{ width: 600, height: 600 }}
      attributionControl={false}
    >
      {SearchResults.map((result) => (
        <div key={result.long}>
          <Marker
            offsetLeft={-20}
            offsetTop={-10}
            longitude={result.long}
            latitude={result.lat}
          >
            <MapPinIcon />
          </Marker>
        </div>
      ))}
    </Map>
  );
}

export default Maps;
