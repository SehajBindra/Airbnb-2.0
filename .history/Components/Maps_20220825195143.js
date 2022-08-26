import React, { useState } from "react";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Popup } from "react-map-gl";

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
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/sehajbindra8/cl78tl7ey000w15mg1k3ip43y"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 600, height: 600 }}
      attributionControl={false}
    >
      {SearchResults?.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p className="cursor-pointer absolute w-1/2 h-screen ">
              {" "}
              <MapPinIcon
                onClick={() => setSelectedLocation(result)}
                className="h-10 text-white"
              />
            </p>
          </Marker>

          {/* this is a poppup should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnclick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default Maps;