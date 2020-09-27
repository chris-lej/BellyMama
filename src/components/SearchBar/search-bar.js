import React from "react";
import { connect } from "react-redux";
import { allServices } from "../../service-catalog";
import Actions from "../../actions";
import Selectors from "../../selectors";
import "./search-bar.css";

const mapStateToProps = (state) => ({
  currentSearchCategory: Selectors.currentSearchCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category)),
});

class LocationSelect extends React.Component {
  currentCategoryName = (currentCategory) =>
    currentCategory === "initial-value"
      ? { readableValue: "Banana" }
      : allServices.find(
          (category) => category.categoryName === currentCategory
        );

  remainingCategories = (currentCategory) =>
    allServices.filter(
      (category) => !(category.categoryName === currentCategory)
    );

  handleTextFieldChange(event) {
    this.props.getData(event.target.value);
  }

  render() {
    return (
      <div className="select-dropdown">
        <select
          onChange={(event) => this.handleTextFieldChange(event, "location")}
        >
          <option value="">
            {
              this.currentCategoryName(this.props.currentSearchCategory)
                .categoryReadableName
            }
          </option>
          {this.remainingCategories(this.props.currentSearchCategory)
            .sort()
            .map((category) => (
              <option key={category.categoryName} value={category.categoryName}>
                {category.categoryReadableName}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelect);
