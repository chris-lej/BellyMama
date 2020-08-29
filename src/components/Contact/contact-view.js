import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <div className="d-flex">
          <div className="contact-left-image"></div>
          <div className="contact-text-wrapper">
            <p>
              Austin has excellent resources for parents-to-be, and now you can
              find them all in this platform. Belly Mama compiled Prenatal,
              Birth, and Postpartum services offered in Austin on one webpage in
              hope to facilitate your search.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
