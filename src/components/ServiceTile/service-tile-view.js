import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import "./service-tile.css";

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
    <div className="service-tile-container">
      <img
        src={this.props.serviceImg}
        className="service-image mb-2 mt-1"
        alt="FAKE ALT"
      ></img>
      <div>Total: 15</div>
      <div className="text-left mt-2">
        <button
          className="service-link d-inline"
          onClick={() =>
            this.getDataWithBusinessView(this.props.serviceName, false)
          }
        >
          <svg
            className="bi bi-list-ul d-inline mb-1 mr-2"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          List View
        </button>
      </div>
      <div className="text-left">
        <button
          className="service-link d-inline"
          onClick={() =>
            this.getDataWithBusinessView(
              this.props.serviceName,
              this.props.mapView
            )
          }
        >
          <svg
            className="bi bi-map d-inline mb-1 mr-2"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z" />
          </svg>
          Map View
        </button>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ServiceTileView);
