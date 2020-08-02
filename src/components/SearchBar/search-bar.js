import React from "react";
import { connect } from "react-redux";
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
  allCategories = [
    {
      value: "prenatal-yoga",
      readableValue: "PreNatal Yoga",
    },
    {
      value: "prenatal-massage",
      readableValue: "PreNatal Massage",
    },
    {
      value: "doulas",
      readableValue: "Doulas",
    },
  ];

  currentCategoryName = (currentCategory) =>
    currentCategory === "initial-value"
      ? { readableValue: "Banana" }
      : this.allCategories.find(
          (category) => category.value === currentCategory
        );

  remainingCategories = (currentCategory) =>
    this.allCategories.filter(
      (category) => !(category.value === currentCategory)
    );

  handleTextFieldChange(event) {
    this.props.getData(event.target.value);
  }

  render() {
    console.log(
      "Current",
      this.currentCategoryName(this.props.currentSearchCategory)
    );
    console.log(
      "Remaining",
      this.remainingCategories(this.props.currentSearchCategory).filter(
        (category) => !(category.value === "initial-category")
      )
    );

    return (
      <div className="select-dropdown">
        <select
          onChange={(event) => this.handleTextFieldChange(event, "location")}
        >
          <option value="">
            {
              this.currentCategoryName(this.props.currentSearchCategory)
                .readableValue
            }
          </option>
          {this.remainingCategories(this.props.currentSearchCategory)
            .sort()
            .map((category) => (
              <option key={category.value} value={category.value}>
                {category.readableValue}
              </option>
            ))}{" "}
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelect);
