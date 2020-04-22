import React from "react";
import {
  Map,
  Marker,
  Popup
} from "react-leaflet";
import MapboxLayer from "./MapBoxLayer";

const MapView = (props) => (
  <div className="pt-2">
    <Map center={[props.centerLat, props.centerLong]} zoom={11}>
      <MapboxLayer
        accessToken={props.mapBoxToken}
      />
      {props.businesses.map(({coordinates, name, phone, address, website}) => (
        <Marker position={[coordinates.lat, coordinates.long]} key={name}>
          <Popup id={`popup-${name}`}>
            <h4>{name}</h4>
            <p>
              {phone}
              <br />
              {address}
              <br />
              <a href={website}>Website</a>
            </p>
          </Popup>
        </Marker>
      ))}
    </Map>
  </div>
);

export default MapView
