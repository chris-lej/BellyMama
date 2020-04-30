import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selectors from '../../selectors';
import HomeView from './home-view';

export const mapStateToProps = (state) => ({
  businessesDataExist: Selectors.businessesDataTree(state).length
});


class HomeContainer extends Component {

  render = () => (
    <HomeView
      businessesDataExist={this.props.businessesDataExist}
    />
  );
}

export default connect(mapStateToProps)(HomeContainer);
