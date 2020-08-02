import React from "react";
import "./business-view.css";
import ContactBubbleIcon from "../Icons/contact-bubble-icon";
import GeoPinIcon from "../Icons/geo-pin-icon";
import WebHomeIcon from "../Icons/web-home-icon";
import "./business-view.css";

const ListView = (props) => (
  <div className="list-container d-flex justify-content-center flex-wrap">
    {props.businesses.length ? (
      props.businesses.map(({ name, address, phone, website }) => {
        return (
          <div key={name} className="business-container">
            <div className="business-name">{name}</div>

            <div className="business-details-wrapper">
              {!!address.length && (
                <div id="business-phone-number" className="business-details">
                  <GeoPinIcon />
                  {address}
                </div>
              )}

              {!!phone.length && (
                <div id="business-phone-number" className="business-details">
                  <ContactBubbleIcon />
                  {phone}
                </div>
              )}

              {!!website.length && (
                <div id="business-website" className="business-details">
                  <WebHomeIcon />
                  <a href={`${website}`}>Website</a>
                </div>
              )}
            </div>
          </div>
        );
      })
    ) : (
      <div className="business-container text-center">
        'Select the service you are looking for with the dropdown above.'
      </div>
    )}
  </div>
);

export default ListView;
