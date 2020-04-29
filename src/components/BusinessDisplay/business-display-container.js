import React from 'react'
import {
  connect
} from "react-redux";
import {
  MAP_CENTER_LAT,
  MAP_CENTER_LONG
} from "../../constants/default-values";
import Selectors from '../../selectors';
import MapView from './map-view';
import ListView from './list-view';

export const mapStateToProps = (state) => ({
  businesses: Selectors.businessesDataTree(state),
  businessViewIsMap: Selectors.businessViewIsMap(state),
  businessesWithoutAddress: Selectors.businessesWithoutAddress(state),
  businessesWithAddress: Selectors.businessesWithAddress(state)
});

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class BusinessDisplayContainer extends React.Component {
  render = () => (
    <div>
      {
        this.props.businessViewIsMap
          ? <MapView
            centerLat={MAP_CENTER_LAT}
            centerLong={MAP_CENTER_LONG}
            businessesWithAddress={this.props.businessesWithAddress}
            businessesWithoutAddress={this.props.businessesWithoutAddress}
            mapBoxToken={MAPBOX_ACCESS_TOKEN}
          />
          : <ListView
            businesses={this.props.businesses}
          />
      }
    </div>
  );
}

export default connect(mapStateToProps)(BusinessDisplayContainer)
