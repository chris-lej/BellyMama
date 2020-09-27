import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import "./contact.css";

const Contact = (props) => {
  const { className } = props;
  const EMAILJS_EMAIL_ID = process.env.REACT_APP_EMAILJS_EMAIL_ID;
  const EMAILJS_CONTACT_TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target);

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
              <button className="contact-form-button" onClick={() => toggle()}>
                Contact Us
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
              <div className="contact-form-input">
                <label className="contact-form-label">Name</label>
                <input type="text" className="form-control" name="from_name" />
              </div>
              <div className="contact-form-input">
                <label className="contact-form-label">Phone</label>
                <input type="text" className="form-control" name="phone" />
              </div>
              <div className="contact-form-input">
                <label className="contact-form-label">E-mail</label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="contact-form-input">
                <label className="contact-form-label">Message</label>
                <textarea
                  type="text"
                  className="form-control contact-comment-box"
                  name="message"
                />
              </div>
              <div className="d-flex justify-content-end">
                <input
                  className="contact-form-button"
                  type="submit"
                  value="Send"
                />
                <button className="contact-form-button" onClick={toggle}>
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

export default Contact;
