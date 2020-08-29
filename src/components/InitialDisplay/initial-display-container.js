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
        <div className=" description-wrapper">
          <p className="description-1">
            Prenatal, Birth and Postpartum services
          </p>
          <div className="description-2">
            <p className="">in Austin, TX</p>
          </div>
        </div>
        <div className="categories-section-title">
          <span>Wellbeing</span>
        </div>
        <div className="categories-wrapper d-flex flex-wrap justify-content-around">
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
          <span>Support</span>
        </div>
        <div className="categories-wrapper d-flex flex-wrap justify-content-around">
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
          <span>Hospitals</span>
        </div>
        <div className="categories-wrapper d-flex flex-wrap justify-content-around">
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
