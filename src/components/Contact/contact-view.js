import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Form from "./contact-form";

import "./contact.css";

const Contact = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
          <Form toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Contact;
