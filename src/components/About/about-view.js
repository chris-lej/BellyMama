import React from "react";
import LogoPerfil from "../../images/back-main.svg";
import "./about.css";

const AboutView = (props) => {
  return (
    <div>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="row">
          <div className="col-2">
            <img src={LogoPerfil} style={{ height: "450px" }} alt="" />
          </div>
          <div className="col-9 ml-4">
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
              <button>Request to add service.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
