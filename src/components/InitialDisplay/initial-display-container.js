import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import SearchBar from "../SearchBar/search-bar";
import Selectors from "../../selectors";
import LogoProfile from "../../images/back-main.svg";
import LogoSimples from "../../images/logo-simples.svg";
import ServiceTileView from "../ServiceTile";

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
      <div className="row">
        <div className="col-2">
          <img src={LogoProfile} className="logo-profile" />
        </div>
        <div className="col-10">
          <ServiceTileView
            serviceImg={LogoSimples}
            serviceName="prenatal-massage"
          />

          <div className="row description-wrapper">
            <p className="description-1 w-100">
              Find Prenatal, Birth and Postpartum services
            </p>
            <div className="description-2 w-100">
              <p className="">in Austin, TX</p>
            </div>
          </div>

          <div className="row text-left links-wrapper">
            <div className="col">
              <button
                className="service-link"
                onClick={() => this.props.getData("prenatal-massage")}
              >
                Prenatal Massage
              </button>
              <button
                className="service-link"
                onClick={() => this.props.getData("prenatal-yoga")}
              >
                Prenatal Yoga
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
                onClick={() => this.props.clickHandler}
              >
                Acupunture
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Chiropractor
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Pre Natal Yoga
              </button>
            </div>

            <div className="col">
              <button
                className="service-link"
                onClick={() => this.props.getData("doulas")}
              >
                Doulas
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Birthing Center
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Hospitals
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Sleep Consultant
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Pre Natal Yoga
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Pre Natal Massage
              </button>
            </div>

            <div className="col">
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Parent Support
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Pregnancy Support
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Placenta Encaplation
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Lactation Consultant
              </button>
              <button
                className="service-link"
                onClick={this.props.clickHandler}
              >
                Chiropractor
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialDisplayContainer);
