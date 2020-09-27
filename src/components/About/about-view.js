import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./about.css";

const AboutView = (props) => {
  const { className } = props;
  const EMAILJS_EMAIL_ID = process.env.REACT_APP_EMAILJS_EMAIL_ID;
  const EMAILJS_CONTACT_TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_EMAIL_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        e.target,
        EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toggle();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
              If you want to add your business click on the button below and get
              in touch with us. Enjoy the website!
            </p>
            <div className="d-flex justify-content-center">
              <button className="about-form-button" onClick={() => toggle()}>
                Request to add service
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Contact us</ModalHeader>
        <ModalBody>
          <form onSubmit={sendEmail}>
            <div>
              <div className="about-form-input">
                <label className="about-form-label">Name</label>
                <input type="text" className="form-control" name="from_name" />
              </div>
              <div className="about-form-input">
                <label className="about-form-label">Phone</label>
                <input type="text" className="form-control" name="phone" />
              </div>
              <div className="about-form-input">
                <label className="about-form-label">E-mail</label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="about-form-input">
                <label className="about-form-label">Message</label>
                <textarea
                  type="text"
                  className="form-control about-comment-box"
                  name="message"
                />
              </div>
              <div className="d-flex justify-content-end">
                <input
                  className="about-form-button"
                  type="submit"
                  value="Send"
                />
                <button className="about-form-button" onClick={toggle}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AboutView;
