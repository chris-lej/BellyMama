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
    <div className="row justify-content-between pt-1 pb-1">
      <div id="left-side" className="d-flex ml-3">
        {props.showSearch ? (
          <img
            src={LogoCompleta}
            alt="belly mama symbol"
            className="search-logo"
          />
        ) : (
          <img
            src={LogoSimples}
            alt="belly mama symbol"
            className="initial-logo"
          />
        )}
        {props.showSearch && <SearchBar navBar />}
      </div>
      <div id="right-side" className="d-flex mr-3 navigation">
        {props.showSearch && (
          <div id="toggle-view" className="pt-2">
            <ToggleView />
          </div>
        )}
        <Link to="/about">
          <Button className="nav-button mt-2" color="link">
            About
          </Button>
        </Link>
        <div className="separator" />
        <Link to="/contact">
          <Button className="nav-button mt-2" color="link">
            Contact
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default MainMenuView;
