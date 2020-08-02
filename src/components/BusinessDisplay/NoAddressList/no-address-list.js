import React, { Component } from "react";
import ContactBubbleIcon from "../../Icons/contact-bubble-icon";
import WebHomeIcon from "../../Icons/web-home-icon";

import "./no-address-list.css";

class NoAddressList extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: "d-none" };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ hidden: "" });
    }, this.props.wait);
  };

  render = () => {
    return (
      <div className={`no-address-list ${this.state.hidden}`}>
        <button>
          <span className="no-address-title text-center">
            Click here for businesses that are not on the map!
          </span>
        </button>
      </div>
    );
  };
}

export default NoAddressList;
