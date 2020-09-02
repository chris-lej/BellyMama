import React, { useRef, useState, useEffect } from "react";
import { Map, Marker, Popup } from "react-leaflet";
import MapboxLayer from "../MapBoxLayer";
import WebHomeIcon from "../../Icons/web-home-icon";
import ContactBubbleIcon from "../../Icons/contact-bubble-icon";
import GeoPinIcon from "../../Icons/geo-pin-icon";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function PointsList(props) {
  const { data, onItemClick } = props;
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            onClick={(e) => {
              onItemClick(index);
            }}
          >
            {item.name}
            {!item.coordinates.lat ? " (without address)" : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PointsLayer(props) {
  const { data, selectedIndex } = props;
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item}
      center={{ lat: item.coordinates.lat, lng: item.coordinates.long }}
      openPopup={selectedIndex === index}
    />
  ));
}

function PointMarker(props) {
  const markerRef = useRef(null);
  const { center, content, openPopup } = props;

  useEffect(() => {
    if (openPopup && markerRef.current) {
      markerRef.current.leafletElement.openPopup();
    }
  }, [openPopup]);

  return content.coordinates.lat ? (
    <Marker ref={markerRef} position={center}>
      <Popup id={`popup-${content.name}`}>
        <div className="business-name">{content.name}</div>

        {!!content.phone.length && (
          <div id="business-phone-number" className="business-details">
            <ContactBubbleIcon />
            {content.phone}
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
      </Popup>{" "}
    </Marker>
  ) : null;
}

function MapExample(props) {
  const [selected, setSelected] = useState();
  const { zoom, center, businesses } = props;

  function handleItemClick(index) {
    setSelected(index);
  }

  return (
    <div className="d-flex">
      <PointsList data={businesses} onItemClick={handleItemClick} />
      <Map center={center} zoom={zoom}>
        <MapboxLayer accessToken={MAPBOX_ACCESS_TOKEN} />
        <PointsLayer selectedIndex={selected} data={businesses} />
      </Map>
    </div>
  );
}

export default MapExample;
