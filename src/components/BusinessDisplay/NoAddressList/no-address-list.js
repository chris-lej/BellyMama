import React, { Component } from 'react';
import ContactBubbleIcon from "../../Icons/contact-bubble-icon";
import WebHomeIcon from "../../Icons/web-home-icon";

import './no-address-list.css';

class NoAddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: 'd-none'};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({hidden: ''});
    }, this.props.wait)
  };

  render = () => {
    return (
      <div className={`w-30 no-address-list ${this.state.hidden}`}>
        <div className="ml-2 mt-2">
          <h4 className="no-address-title text-center">
            Check these out too!
          </h4>
          <p className="no-address-description text-center">These professionals currently don't have an address.</p>
        </div>
        {
          this.props.businessesWithoutAddress.map(({ name, phone, website }) => (
            <div className="no-address-business-container" key={`map-list-${name}`}>
              <div className="business-name">
                {name}
              </div>

              {
                !!phone.length &&
                <div id="business-phone-number" className="business-details">
                  <ContactBubbleIcon />
                  {phone}
                </div>
              }

              {
                !!website.length &&
                <div id="business-website" className="business-details">
                  <WebHomeIcon />
                  <a href={`${website}`}>Website</a>
                </div>
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default NoAddressList;
