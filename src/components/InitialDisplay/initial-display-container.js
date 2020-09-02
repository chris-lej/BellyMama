import React, { Component } from "react";
import { connect } from "react-redux";
import {
  wellbeingCategories,
  supportCategories,
  hospitalsCategories,
} from "../../service-catalog";
import Actions from "../../actions";
import Selectors from "../../selectors";
import CategoryCard from "../CategoryCard";

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
        <div className=" description-wrapper d-flex">
          <p className="description-1">
            Prenatal, Birth and Postpartum services in{" "}
            <span className="description-2">Austin, TX</span>
          </p>
        </div>
        <div className="categories-section-title">
          <div className="section-title-horizontal-line1" />
          <span>Wellbeing</span>
          <div className="section-title-horizontal-line2" />
        </div>
        <div className="categories-wrapper d-flex flex-wrap">
          {wellbeingCategories.map(
            ({ categoryImage, categoryName, categoryReadableName }) => (
              <div className="mr-4 mb-3" key={categoryName}>
                <CategoryCard
                  serviceColor="wellbeing"
                  serviceImg={categoryImage}
                  serviceName={categoryReadableName}
                  serviceSearchName={categoryName}
                />
              </div>
            )
          )}
        </div>

        <div className="categories-section-title">
          <div className="section-title-horizontal-line1" />
          <span>Support</span>
          <div className="section-title-horizontal-line2" />
        </div>
        <div className="categories-wrapper d-flex flex-wrap">
          {supportCategories.map(
            ({ categoryImage, categoryName, categoryReadableName }) => (
              <div className="mr-4 mb-3" key={categoryName}>
                <CategoryCard
                  serviceColor="support"
                  serviceImg={categoryImage}
                  serviceName={categoryReadableName}
                  serviceSearchName={categoryName}
                />
              </div>
            )
          )}
        </div>

        <div className="categories-section-title">
          <div className="section-title-horizontal-line1" />

          <span>Birthing</span>
          <div className="section-title-horizontal-line2" />
        </div>
        <div className="categories-wrapper d-flex flex-wrap">
          {hospitalsCategories.map(
            ({ categoryImage, categoryName, categoryReadableName }) => (
              <div className="mr-4 mb-3" key={categoryName}>
                <CategoryCard
                  serviceColor="hospital"
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
