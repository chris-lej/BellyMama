import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import "./category-card.css";

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category)),
});

class CategoryCardView extends Component {
  render = () => (
    <div className="category-wrapper">
      <div
        className={`category-title category-title-${this.props.serviceColor} d-flex align-items-end mb-1 `}
      >
        <span>{this.props.serviceName}</span>
      </div>

      <div className="category-body d-flex align-items-end">
        <img
          id="image"
          src={this.props.serviceImg}
          alt={this.props.serviceName}
        />

        <div className="category-link-wrapper">
          <button
            className="category-button category-map"
            onClick={() => this.props.getData(this.props.serviceSearchName)}
          >
            MAP
          </button>
          <button
            className="category-button category-list"
            onClick={() => this.props.getData(this.props.serviceSearchName)}
          >
            LIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(CategoryCardView);
