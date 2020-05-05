import React, { Component } from 'react';
import ContactBubbleIcon from "../../Icons/contact-bubble-icon";
import WebHomeIcon from "../../Icons/web-home-icon";

class NoAddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: 'd-none'};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({hidden: ''});
    }, this.props.wait)

  }

  render = () => {
    return (
      <div className={`w-30 no-address-list ${this.state.hidden}`}>
        <h3>
          Business Without Address
        </h3>
        {
          this.props.businessesWithoutAddress.map(({ name, phone, website }) => (
            <div className="business-container" key={`map-list-${name}`}>
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
                  <a href={`http://${website}`}>Website</a>
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
