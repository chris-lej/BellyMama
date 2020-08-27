import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import Selectors from "../../selectors";
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
    serviceSearchName: "prenatal-yoga",
  },
  {
    serviceName: "Prenatal Massage",
    serviceImg: PlaceholderPic,
    serviceSearchName: "prenatal-massage",
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
            Prenatal, Birth and Postpartum services
          </p>
          <div className="description-2">
            <p className="">in Austin, TX</p>
          </div>
        </div>
        <div className="categories-wrapper d-flex flex-wrap justify-content-between">
          {services.map((service) => (
            <div className="mr-4 mb-3">
              <ServiceTileView
                serviceImg={service.serviceImg}
                serviceName={service.serviceName}
                serviceSearchName={service.serviceSearchName}
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
