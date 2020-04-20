import React from "react";
import { Map, Marker, Popup } from "react-leaflet";
import MapboxLayer from "./MapBoxLayer";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const WorldMap = (props) => (
  <div>
    <Map center={[props.centerLat, props.centerLong]} zoom={11}>
      <MapboxLayer
        accessToken={MAPBOX_ACCESS_TOKEN}
      />
      {props.businesses.map((business) => (
        <Marker position={[business.coordinates.lat, business.coordinates.long]} key={business.name}>
          <Popup id={`popup-${business.name}`}>
            <h4>{business.name}</h4>
            <p>
              {business.phone}
              <br />
              {business.address}
              <br />
              <a href={business.website}>Website</a>
            </p>
          </Popup>
        </Marker>
      ))}
    </Map>
  </div>
);

export default WorldMap
