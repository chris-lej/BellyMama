import React from "react";
import {
  Map,
  Marker,
  Popup
} from "react-leaflet";
import MapboxLayer from "./MapBoxLayer";
import './business-view.css'
import WebHomeIcon from "../Icons/web-home-icon";
import ContactBubbleIcon from "../Icons/contact-bubble-icon";
import GeoPinIcon from "../Icons/geo-pin-icon";
import NoAddressList from "./NoAddressList";

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
            <div className="business-name">
              {name}
            </div>

            {
              !!phone.length &&
              <div id="business-phone-number" className="business-details">
                <ContactBubbleIcon />
                {phone}
              </div>
            }

            <div id="business-address" className="mbusiness-details">
              <GeoPinIcon />
              {address}
            </div>

              {
                !!website.length &&
                <div id="business-website" className="business-details">
                  <WebHomeIcon />
                  <a href={`${website}`}>Website</a>
                </div>
              }
          </Popup>
        </Marker>
        ))
      }
    </Map>
    {
      !!props.businessesWithoutAddress.length &&
        <NoAddressList businessesWithoutAddress={props.businessesWithoutAddress} wait={300} />
    }
  </div>
);

export default MapView
