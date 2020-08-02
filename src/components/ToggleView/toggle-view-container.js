import React, { Component } from "react";
import { connect } from "react-redux";
import { businessViewIsMap } from "../../selectors";
import ToggleViewView from "./toggle-view-view";
import Actions from "../../actions";

export const mapStateToProps = (state) => ({
  businessViewIsMap: businessViewIsMap(state),
});

export const mapDispatchToProps = (dispatch) => ({
  toggleBusinessView: (value) => dispatch(Actions.toggleBusinessView(value)),
});

class ToggleViewContainer extends Component {
  render = () => (
    <ToggleViewView
      businessViewIsMap={this.props.businessViewIsMap}
      toggleView={this.props.toggleBusinessView}
    />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleViewContainer);
