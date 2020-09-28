import React, { Component } from "react";
import emailjs from "emailjs-com";
import classnames from "classnames";
import { validateFields } from "../../Validation";

import "./contact.css";

const initialState = {
  name: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  phone: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  email: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  message: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  submitCalled: false,
  allFieldsValidated: false,
};

const EMAILJS_EMAIL_ID = process.env.REACT_APP_EMAILJS_EMAIL_ID;
const EMAILJS_CONTACT_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  sendEmail(e) {
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
          this.props.toggle();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  /*
   * validates the field onBlur if sumbit button is not clicked
   * set the validateOnChange to true for that field
   * check for error
   */
  handleBlur(validationFunc, evt) {
    const field = evt.target.name;
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field]["validateOnChange"] === false &&
      this.state.submitCalled === false
    ) {
      this.setState((state) => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value),
        },
      }));
    }
    return;
  }

  /*
   * update the value in state for that field
   * check for error if validateOnChange is true
   */
  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState((state) => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]["validateOnChange"] ? validationFunc(fieldVal) : "",
      },
    }));
  }

  /*
   * validate all fields
   * check if all fields are valid if yes then submit the Form
   * otherwise set errors for the feilds in the state
   */
  handleSubmit(evt) {
    evt.preventDefault();
    // validate all fields
    const { name, phone, email, message } = this.state;
    const nameError = validateFields.validateIsRequired(name.value);
    const phoneError = validateFields.validateIsRequired(phone.value);
    const emailError = validateFields.validateEmail(email.value);
    const messageError = validateFields.validateIsRequired(message.value);

    [nameError, phoneError, emailError, messageError].every((e) =>
      console.log(e, e === false)
    );
    if (
      [nameError, phoneError, emailError, messageError].every(
        (e) => e === false
      )
    ) {
      // no errors submit the form
      console.log("success");
      this.sendEmail(evt);

      // clear state and show all fields are validated
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
    } else {
      // update the state with errors
      this.setState((state) => ({
        name: {
          ...state.name,
          validateOnChange: true,
          error: nameError,
        },
        phone: {
          ...state.phone,
          validateOnChange: true,
          error: phoneError,
        },
        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError,
        },
        message: {
          ...state.message,
          validateOnChange: true,
          error: messageError,
        },
      }));
    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { name, phone, email, message, allFieldsValidated } = this.state;
    return (
      <div className="">
        <div>
          {allFieldsValidated && (
            <p className="text-success text-center">
              Success, All fields are validated
            </p>
          )}

          {/* Form Starts Here */}
          <form onSubmit={(evt) => this.handleSubmit(evt)}>
            {/* Name field */}
            <div className="form-group">
              <label className="contact-form-label">Name</label>
              <input
                type="text"
                name="name"
                value={name.value}
                className={classnames(
                  "form-control",
                  { "is-valid": name.error === false },
                  { "is-invalid": name.error }
                )}
                onChange={(evt) =>
                  this.handleChange(validateFields.validateIsRequired, evt)
                }
                onBlur={(evt) =>
                  this.handleBlur(validateFields.validateIsRequired, evt)
                }
              />
              <div className="invalid-feedback">
                {name.error && "Name is required"}
              </div>
            </div>

            {/* Phone field */}
            <div className="form-group">
              <label className="contact-form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={phone.value}
                className={classnames(
                  "form-control",
                  { "is-valid": phone.error === false },
                  { "is-invalid": phone.error }
                )}
                onChange={(evt) =>
                  this.handleChange(validateFields.validateIsRequired, evt)
                }
                onBlur={(evt) =>
                  this.handleBlur(validateFields.validateIsRequired, evt)
                }
              />
              <div className="invalid-feedback">
                {phone.error && "Phone is required"}
              </div>
            </div>

            {/* Email field */}
            <div className="form-group">
              <label className="contact-form-label">Email</label>
              <input
                type="text"
                name="email"
                value={email.value}
                className={classnames(
                  "form-control",
                  { "is-valid": email.error === false },
                  { "is-invalid": email.error }
                )}
                onChange={(evt) =>
                  this.handleChange(validateFields.validateEmail, evt)
                }
                onBlur={(evt) =>
                  this.handleBlur(validateFields.validateEmail, evt)
                }
              />
              <div className="invalid-feedback">{email.error}</div>
            </div>

            {/* Message field */}
            <div className="form-group">
              <label className="contact-form-label">Message</label>
              <textarea
                type="text"
                name="message"
                value={message.value}
                className={classnames(
                  "contact-comment-box",
                  "form-control",
                  { "is-valid": message.error === false },
                  { "is-invalid": message.error }
                )}
                onChange={(evt) =>
                  this.handleChange(validateFields.validateIsRequired, evt)
                }
                onBlur={(evt) =>
                  this.handleBlur(validateFields.validateIsRequired, evt)
                }
              />
              <div className="invalid-feedback">
                {message.error && "Message is required"}
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="contact-form-button"
                onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Submit
              </button>
              <button
                className="contact-form-button"
                onClick={this.props.toggle}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
