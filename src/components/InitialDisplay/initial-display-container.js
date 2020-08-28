import React, { Component } from "react";
import { connect } from "react-redux";
import { allServices } from "../../service-catalog";
import Actions from "../../actions";
import Selectors from "../../selectors";
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
          {allServices.map(
            ({ categoryImage, categoryName, categoryReadableName }) => (
              <div className="mr-4 mb-3" key={categoryName}>
                <ServiceTileView
                  serviceImg={categoryImage}
                  serviceName={categoryReadableName}
                  serviceSearchName={categoryName}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialDisplayContainer);
