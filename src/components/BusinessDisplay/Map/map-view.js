import React, { useRef, useState, useEffect } from "react";
import L from "leaflet";
import { Map, Marker, Popup } from "react-leaflet";
import MapboxLayer from "../MapBoxLayer";
import WebHomeIcon from "../../Icons/web-home-icon";
import ContactBubbleIcon from "../../Icons/contact-bubble-icon";
import GeoPinIcon from "../../Icons/geo-pin-icon";
import EmailIcon from "../../Icons/email-icon";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const customIcon = new L.icon({
  iconUrl: require("../../../images/facebook.svg"),
  iconRetinaUrl: require("../../../images/facebook.svg"),
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

const customIcon1 = new L.icon({
  iconUrl: require("../../../images/instagram.svg"),
  iconRetinaUrl: require("../../../images/instagram.svg"),
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

function PointsList(props) {
  const { data, onItemClick, onItemHover, onItemHoverClear } = props;
  return (
    <div className="business-container">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseLeave={(e) => {
            onItemHoverClear();
          }}
          onMouseOver={(e) => {
            onItemHover(index);
          }}
          onClick={(e) => {
            onItemClick(index);
          }}
          className="map-service-box"
        >
          <div className="business-name">{item.name}</div>

          {!!item.phone.length && (
            <div id="business-phone-number" className="business-details">
              <ContactBubbleIcon />
              {item.phone}
            </div>
          )}

          {!!item.email.length && (
            <div id="business-email" className="business-details">
              <EmailIcon />
              {item.email}
            </div>
          )}

          <div id="business-address" className="mbusiness-details">
            <GeoPinIcon />
            {item.address}
          </div>

          {!!item.website.length && (
            <div id="business-website" className="business-details">
              <WebHomeIcon />
              <a href={`${item.website}`}>Website</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PointsLayer(props) {
  const { data, selectedIndex, hoveredIndex } = props;
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item}
      center={{ lat: item.coordinates.lat, lng: item.coordinates.long }}
      openPopup={selectedIndex === index}
      setHoverColor={hoveredIndex === index}
    />
  ));
}

function PointMarker(props) {
  const markerRef = useRef(null);
  const { center, content, openPopup, setHoverColor } = props;

  useEffect(() => {
    if (setHoverColor && markerRef.current) {
      markerRef.current.leafletElement.setIcon(customIcon);
      markerRef.current.leafletElement.setZIndexOffset(99999);
    } else if (markerRef.current) {
      markerRef.current.leafletElement.setIcon(customIcon1);
      markerRef.current.leafletElement.setZIndexOffset(10);
    }
    if (openPopup && markerRef.current) {
      markerRef.current.leafletElement.openPopup();
    }
  }, [openPopup, setHoverColor]);

  return content.coordinates.lat ? (
    <Marker ref={markerRef} position={center} riseOnHover>
      <Popup id={`popup-${content.name}`}>
        <div className="business-name">{content.name}</div>

        {!!content.phone.length && (
          <div id="business-phone-number" className="business-details">
            <ContactBubbleIcon />
            {content.phone}
          </div>
        )}

        {!!content.email.length && (
          <div id="business-email" className="business-details">
            <EmailIcon />
            {content.email}
          </div>
        )}

        <div id="business-address" className="mbusiness-details">
          <GeoPinIcon />
          {content.address}
        </div>

        {!!content.website.length && (
          <div id="business-website" className="business-details">
            <WebHomeIcon />
            <a href={`${content.website}`}>Website</a>
          </div>
        )}
      </Popup>
    </Marker>
  ) : null;
}

function MapExample(props) {
  const [selected, setSelected] = useState();
  const [hovered, setHovered] = useState();
  const { zoom, center, businesses } = props;

  function handleItemClick(index) {
    setSelected(index);
  }

  function handleItemHover(index) {
    setHovered(index);
    console.log("hovered ", hovered);
  }

  function handleItemHoverClear() {
    setHovered(null);
  }

  return (
    <div className="d-flex">
      <PointsList
        data={businesses}
        onItemClick={handleItemClick}
        onItemHover={handleItemHover}
        onItemHoverClear={handleItemHoverClear}
      />
      <Map center={center} zoom={zoom}>
        <MapboxLayer accessToken={MAPBOX_ACCESS_TOKEN} />
        <PointsLayer
          selectedIndex={selected}
          hoveredIndex={hovered}
          data={businesses}
        />
      </Map>
    </div>
  );
}

export default MapExample;
