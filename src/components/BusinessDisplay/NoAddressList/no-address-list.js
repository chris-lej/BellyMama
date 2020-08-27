import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../../actions";
import "./no-address-list.css";

export const mapDispatchToProps = (dispatch) => ({
  toggleBusinessView: (value) => dispatch(Actions.toggleBusinessView(value)),
});

class NoAddressList extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: "d-none" };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ hidden: "" });
    }, this.props.wait);
  };

  render = () => {
    return (
      <div className={`no-address-list ${this.state.hidden}`}>
        <button
          className="no-address-title"
          onClick={() => this.props.toggleBusinessView(false)}
        >
          <span className="text-center">
            <strong>Click here</strong> for businesses that don't have an
            address!
          </span>
        </button>
      </div>
    );
  };
}

export default connect(null, mapDispatchToProps)(NoAddressList);
