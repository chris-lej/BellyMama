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
            <p className="contact-hear">We want to hear from you!</p>
            <p className="contact-text">
              Please get in touch with any suggestions, tips or questions that
              we have not answered in our FAQs and we will gladly get back to
              you.
            </p>
            <div className="d-flex justify-content-center">
              <button className="contact-button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
