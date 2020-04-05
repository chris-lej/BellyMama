import React from "react";
import { Map, Marker, Popup } from "react-leaflet";
import MapboxLayer from "./MapBoxLayer";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiY2xlamV1bmVtZWlzdGVyIiwiYSI6ImNrN3hpaHExdDAwNjMzZnFxZWt2czNveGgifQ.1j3kadYAFg5UCsTkcvO1_Q";

const WorldMap = (props) => (
  <div>
    <Map center={[props.centerLat, props.centerLong]} zoom={11}>
      <MapboxLayer
        accessToken={MAPBOX_ACCESS_TOKEN}
      />
      {props.businesses.map((business) => (
        <Marker position={[business.coordinates.latitude, business.coordinates.longitude]} key={business.id}>
          <Popup id={`popup-${business.id}`}>
            {business.name}
          </Popup>
        </Marker>
      ))}
    </Map>
  </div>
);

export default WorldMap
