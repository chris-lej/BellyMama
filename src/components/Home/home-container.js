import React, { Component } from 'react';
import { connect } from 'react-redux';
import { businessViewIsMap } from '../../selectors';
import HomeView from './home-view';
import Actions from "../../actions";

export const mapStateToProps = (state) => ({
  businessViewIsMap: businessViewIsMap(state)
});

export const mapDispatchToProps = (dispatch) => ({
  toggleBusinessView: (value) => dispatch(Actions.toggleBusinessView(value))
});


class HomeContainer extends Component {

  render = () => (
    <HomeView
      businessViewIsMap={this.props.businessViewIsMap}
      toggleView={this.props.toggleBusinessView}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
