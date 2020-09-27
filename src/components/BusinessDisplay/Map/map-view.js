import React, { useRef, useState, useEffect } from "react";
import L from "leaflet";
import { Map, Marker, Popup } from "react-leaflet";
import MapboxLayer from "../MapBoxLayer";
import WebHomeIcon from "../../Icons/web-home-icon";
import GeoPinIcon from "../../Icons/geo-pin-icon";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const markerBlue = new L.icon({
  iconUrl: require("../../../images/marker-blue.png"),
  iconRetinaUrl: require("../../../images/marker-blue.png"),
});

const markerPink = new L.icon({
  iconUrl: require("../../../images/marker-pink.png"),
  iconRetinaUrl: require("../../../images/marker-pink.png"),
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
              {item.phone}
            </div>
          )}

          <div id="business-address" className="business-details">
            {item.address ? (
              <span>{item.address}</span>
            ) : (
              <span className="no-address-message">
                This business does not have an address.
              </span>
            )}
          </div>

          <div className="d-flex justify-content-around mb-1 mt-1">
            {!!item.website.length && (
              <div id="business-website" className="business-details">
                <a
                  href={`${item.website}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="business-buttons">
                    Website
                    <WebHomeIcon />
                  </button>
                </a>
              </div>
            )}

            {!!item.address.length && (
              <div className="business-details">
                <a
                  href={`http://maps.google.com/?q=${item.address}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="business-buttons">
                    Directions
                    <GeoPinIcon />
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PointsLayer(props) {
  const { data, selectedIndex, hoveredIndex, onClosePopup } = props;
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item}
      center={{ lat: item.coordinates.lat, lng: item.coordinates.long }}
      openPopup={selectedIndex === index}
      setHoverColor={hoveredIndex === index}
      closePopup={onClosePopup}
    />
  ));
}

function PointMarker(props) {
  const markerRef = useRef(null);
  const { center, content, openPopup, setHoverColor, closePopup } = props;

  useEffect(() => {
    if (setHoverColor && markerRef.current) {
      markerRef.current.leafletElement.setIcon(markerPink);
      markerRef.current.leafletElement.setZIndexOffset(99999);
    } else if (markerRef.current && !openPopup) {
      markerRef.current.leafletElement.setIcon(markerBlue);
      markerRef.current.leafletElement.setZIndexOffset(10);
    }
    if (openPopup && markerRef.current) {
      markerRef.current.leafletElement.setIcon(markerPink);
      markerRef.current.leafletElement.openPopup();
    }
    if (markerRef.current) {
      markerRef.current.leafletElement.on("mouseover", () => {
        markerRef.current.leafletElement.setIcon(markerPink);
        markerRef.current.leafletElement.setZIndexOffset(99999);
      });
      markerRef.current.leafletElement.on("mouseout", () => {
        markerRef.current.leafletElement.setIcon(markerBlue);
        markerRef.current.leafletElement.setZIndexOffset(10);
      });
    }
  }, [openPopup, setHoverColor]);

  return content.coordinates.lat ? (
    <Marker ref={markerRef} position={center} riseOnHover>
      <Popup id={`popup-${content.name}`} onClose={closePopup}>
        <div className="business-name">{content.name}</div>

        {!!content.phone.length && (
          <div id="business-phone-number" className="business-details">
            {content.phone}
          </div>
        )}

        <div id="business-address" className="business-details">
          {content.address ? (
            <span>{content.address}</span>
          ) : (
            <span className="no-address-message">
              This business does not have an address.
            </span>
          )}
        </div>

        <div className="d-flex justify-content-around mb-1 mt-1">
          {!!content.website.length && (
            <div id="business-website" className="business-details">
              <a
                href={`${content.website}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="business-buttons">
                  Website
                  <WebHomeIcon />
                </button>
              </a>
            </div>
          )}

          {!!content.address.length && (
            <div className="business-details">
              <a
                href={`http://maps.google.com/?q=${content.address}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="business-buttons">
                  Directions
                  <GeoPinIcon />
                </button>
              </a>
            </div>
          )}
        </div>
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
  }

  function handleItemHoverClear() {
    setHovered(null);
  }

  function handleClosePopup() {
    setSelected(null);
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
          onClosePopup={handleClosePopup}
          data={businesses}
        />
      </Map>
    </div>
  );
}

export default MapExample;
