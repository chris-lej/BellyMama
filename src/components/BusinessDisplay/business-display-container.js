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
  businesses: Selectors.apiDataTree(state),
  businessViewIsMap: Selectors.businessViewIsMap(state)
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
            businesses={this.props.businesses}
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
