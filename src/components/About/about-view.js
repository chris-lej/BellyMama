import React from "react";
import "./about.css";

const AboutView = (props) => {
  return (
    <div>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="d-flex">
          <div className="about-left-image"></div>
          <div className="about-text-wrapper">
            <p>
              Austin has excellent resources for parents-to-be, and now you can
              find them all in this platform. Belly Mama compiled Prenatal,
              Birth, and Postpartum services offered in Austin on one webpage in
              hope to facilitate your search.
            </p>
            <p>
              We carefully selected services that mention prenatal, birth or
              postpartum services on their webpage, thus, it is guarantee that
              they do offer what you are looking for.
            </p>
            <p>
              You can search services based on location and find one that is
              next to your home, work, or wherever it is more convenient for
              you, or just by service name in the list view icon.
            </p>
            <p>
              If you want to add your business in our webpage, click here. To
              contact us, please email bellymama@io.com. Enjoy the website!
            </p>
            <div className="d-flex justify-content-center">
              <button className="request-button">
                Request to add service.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
