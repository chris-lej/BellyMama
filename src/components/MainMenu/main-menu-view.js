import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Actions from "../../actions";
import "./main-menu.css";
import Logo from "../../images/logo.png";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";

const mapDispatchToProps = (dispatch) => ({
  clearBusinesses: () => dispatch(Actions.clearBusinesses()),
});

class MainMenuView extends React.Component {
  render() {
    return (
      <div id="main-menu-wrapper">
        <div className="row justify-content-between header-container">
          <div id="left-side" className="d-flex">
            <Link to="/about">
              <Button className="nav-button" color="link">
                About us
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="nav-button" color="link">
                Contact
              </Button>
            </Link>
            <Link to="/faq">
              <Button className="nav-button" color="link">
                FAQ
              </Button>
            </Link>
          </div>
          <div id="center-side" className="d-flex">
            <Link to="/" onClick={() => this.props.clearBusinesses()}>
              <img
                src={Logo}
                alt="belly mama symbol"
                className="initial-logo"
              />
            </Link>
          </div>
          <div
            id="right-side"
            className="d-flex mr-3 mt-1 navigation justify-content-end"
          >
            <img
              src={Instagram}
              className="social-medias mr-4"
              alt="Instagram logo"
            />
            <img
              src={Facebook}
              className="social-medias mr-4"
              alt="facebook logo"
            />
          </div>
        </div>
        <hr className="header-divisor" />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MainMenuView);
