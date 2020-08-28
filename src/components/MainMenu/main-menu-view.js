import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Actions from "../../actions";
import "./main-menu.css";
import LogoSimples from "../../images/logo-simples.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";

const mapDispatchToProps = (dispatch) => ({
  clearBusinesses: () => dispatch(Actions.clearBusinesses()),
});

class MainMenuView extends React.Component {
  render() {
    return (
      <div id="main-menu-wrapper">
        <div className="row justify-content-between header-container mb-3">
          <div id="left-side" className="d-flex">
            <Link to="/about">
              <Button className="nav-button mt-2" color="link">
                About us
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="nav-button mt-2" color="link">
                Contact
              </Button>
            </Link>
            <Link to="/faq">
              <Button className="nav-button mt-2" color="link">
                FAQ
              </Button>
            </Link>
          </div>
          <div id="center-side" className="d-flex">
            <Link to="/" onClick={() => this.props.clearBusinesses()}>
              <img
                src={LogoSimples}
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
