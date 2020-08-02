import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import SearchBar from "../SearchBar/search-bar";
import Selectors from "../../selectors";
import LogoProfile from "../../images/back-main.svg";
import PlaceholderPic from "../../images/placeholder.png";
import ServiceTileView from "../ServiceTile";

import "./initial-display.css";

const mapStateToProps = (state) => ({
  currentSearchCategory: Selectors.currentSearchCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category)),
});

const services = [
  {
    serviceName: "Prenatal Yoga",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Prenatal Massage",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Acupunture",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Chripractor",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Doulas",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Birththing Center",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Hospitals",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Sleep Consultant",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Parent Support",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Placenta Encapsulation",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Pregnancy Support",
    serviceImg: PlaceholderPic,
  },
  {
    serviceName: "Lactation Consultant",
    serviceImg: PlaceholderPic,
  },
];

class InitialDisplayContainer extends Component {
  render = () => {
    return (
      <div>
        <div className=" description-wrapper">
          <p className="description-1">
            Find Prenatal, Birth and Postpartum services
          </p>
          <div className="description-2">
            <p className="">in Austin, TX</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {services.map((service) => (
            <div className="mr-4 mb-4">
              <ServiceTileView
                serviceImg={service.serviceImg}
                serviceName={service.serviceName}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialDisplayContainer);
