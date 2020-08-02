import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import "./main-menu.css";
import SearchBar from "../SearchBar/search-bar";
import ToggleView from "../ToggleView";
import LogoCompleta from "../../images/logo-completa.svg";
import LogoSimples from "../../images/logo-simples.svg";

const MainMenuView = (props) => (
  <div>
    <div className="row justify-content-between header-container">
      <div id="left-side" className="d-flex ml-3">
        <img
          src={LogoSimples}
          alt="belly mama symbol"
          className="initial-logo"
        />
      </div>
      {true && (
        <div className="d-flex dropdown-and-toggle">
          <SearchBar navBar />
          <ToggleView />
        </div>
      )}

      <div id="right-side" className="d-flex mr-3 navigation">
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
      </div>
    </div>
    <hr className="header-divisor" />
  </div>
);

export default MainMenuView;
