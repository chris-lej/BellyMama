import React from "react";
import { connect } from "react-redux";
import {
  MAP_CENTER_LAT,
  MAP_CENTER_LONG,
} from "../../constants/default-values";
import Selectors from "../../selectors";
import Map from "./Map";
import SearchBar from "../SearchBar";

export const mapStateToProps = (state) => ({
  businesses: Selectors.businessesDataTree(state),
});

class BusinessDisplayContainer extends React.Component {
  render = () => (
    <div className="container">
      <SearchBar />

      <div className="map-container">
        <Map
          zoom={11}
          center={[MAP_CENTER_LAT, MAP_CENTER_LONG]}
          businesses={this.props.businesses}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(BusinessDisplayContainer);
