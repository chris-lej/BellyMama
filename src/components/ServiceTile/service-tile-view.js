import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import "./service-tile.css";

import PlaceholderPic from "../../images/placeholder.png";

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category)),
  toggleBusinessView: (value) => dispatch(Actions.toggleBusinessView(value)),
});

class ServiceTileView extends Component {
  getDataWithBusinessView = (service, mapView = true) => {
    if (!mapView) {
      this.props.toggleBusinessView(false);
      this.props.getData(service);
    }
    this.props.getData(service);
  };

  render = () => (
    <div
      style={{
        width: "220px",
        height: "250px",
        margin: "5% auto",
        backgroundImage: `url(${PlaceholderPic})`,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="ribbon-wrapper">
        <div className="glow">&nbsp;</div>
        <div className="ribbon-front">
          <div className="ribbon-title text-center">
            <span>{this.props.serviceName}</span>
          </div>

          <div className="service-view-selection mt-1">
            <div className="d-flex justify-content-center">
              <button className="text-left tile-service-link mr-2">
                <div>
                  <svg
                    className="bi bi-map mb-1 mr-1"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z" />
                  </svg>
                  Map View
                </div>
              </button>

              <button className="text-left tile-service-link">
                <div>
                  <svg
                    className="bi bi-list-ul mb-1 mr-1"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  List View
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="ribbon-edge-topleft"></div>
        <div className="ribbon-edge-topright"></div>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ServiceTileView);
