import React from 'react'
import {
  connect
} from "react-redux";
import {
  MAP_CENTER_LAT,
  MAP_CENTER_LONG
} from "../../constants/default-values";
import Selectors from '../../selectors';
import WorldMapView from './world-map-view';

export const mapStateToProps = (state) => ({
  businesses: Selectors.apiDataTree(state)
});

class WorldMapContainer extends React.Component {
  render() {
    return (
        <WorldMapView
          centerLat={MAP_CENTER_LAT}
          centerLong={MAP_CENTER_LONG}
          businesses={this.props.businesses}
        />
    );
  }
}

export default connect(mapStateToProps)(WorldMapContainer)
