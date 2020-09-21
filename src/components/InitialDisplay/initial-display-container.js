import React, { Component } from "react";
import { connect } from "react-redux";
import {
  wellbeingCategories,
  supportCategories,
  birthingCategories,
} from "../../service-catalog";
import Actions from "../../actions";
import Selectors from "../../selectors";
import PerfilMulher from "../../images/perfil-mulher.png";

import "./initial-display.css";

const mapStateToProps = (state) => ({
  currentSearchCategory: Selectors.currentSearchCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category)),
});

class InitialDisplayContainer extends Component {
  render = () => {
    return (
      <div className="home-container d-flex">
        <img src={PerfilMulher} className="home-left-image" alt="" />
        <div className="home-text-wrapper">
          <div className="home-title-wrapper">
            <div className="home-title-first">Hi Parents,</div>
            <div>
              Use this platform to find Prenatal, Birth and Postpartum services
              in
              <span className="home-location-text"> Austin,&nbsp;TX.</span>
            </div>
          </div>

          <div className="d-flex justify-content-center home-categories-wrapper">
            <div className="home-category-col text-left">
              <div className="home-category-title">Wellbeing</div>
              <div className="home-category-services">
                {wellbeingCategories.map((service) => (
                  <div
                    className="home-service"
                    onClick={() => this.props.getData(service.categoryName)}
                  >
                    {"> "} {service.categoryReadableName}
                  </div>
                ))}
              </div>
            </div>
            <div className="home-vertical-divider" />
            <div className="home-category-col text-left">
              <div className="home-category-title">Support</div>
              <div className="home-category-services">
                {supportCategories.map((service) => (
                  <div
                    className="home-service"
                    onClick={() => this.props.getData(service.categoryName)}
                  >
                    {"> "} {service.categoryReadableName}
                  </div>
                ))}
              </div>
            </div>
            <div className="home-vertical-divider" />
            <div className="home-category-col text-left">
              <div className="home-category-title">Birthing</div>
              <div className="home-category-services">
                {birthingCategories.map((service) => (
                  <div
                    className="home-service"
                    onClick={() => this.props.getData(service.categoryName)}
                  >
                    {"> "}
                    {service.categoryReadableName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialDisplayContainer);
