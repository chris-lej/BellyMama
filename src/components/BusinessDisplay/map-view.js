import React from "react";
import {
  Map,
  Marker,
  Popup
} from "react-leaflet";
import MapboxLayer from "./MapBoxLayer";
import './business-view.css'

const MapView = (props) => (
  <div className="d-flex map-container">
    <Map center={[props.centerLat, props.centerLong]} zoom={11}>
      <MapboxLayer
        accessToken={props.mapBoxToken}
      />
      {
        props.businessesWithAddress.map(({ coordinates, name, phone, address, website }) => (
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
        ))
      }
    </Map>
    {
      !!props.businessesWithoutAddress.length &&
        <div className="w-30">
          <h3>
            Business Without Address
          </h3>
          {
            props.businessesWithoutAddress.map(({ name, phone, website }) => (
              <div className="business-container" key={`map-list-${name}`}>
                <div>{name}</div>
                <div>{phone}</div>
                <div>{website}</div>
              </div>
            ))
          }
        </div>
    }
  </div>
);

export default MapView
