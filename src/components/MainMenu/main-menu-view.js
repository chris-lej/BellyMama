import React from 'react';
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import './main-menu.css'
import SearchBar from '../SearchBar/search-bar';
import ToggleView from '../ToggleView';
import Symbol from '../../images/symbol02.png';

const MainMenuView = () => (
  <div>
    <Navbar expand="md">
      <Nav className="w-100 mt-0 navbar-content justify-content-between" navbar>
        <li id="left-side" className="d-flex">
          <img src={Symbol} alt="belly mama symbol" className="logo-symbol"/>
          <div className="search-bar">
            <SearchBar navBar />
          </div>
        </li>
        <div id="right-side" className="d-flex pt-3">
          <div id="toggle-view" className="pt-2">
            <ToggleView />
          </div>
          <NavItem>
            <NavLink tag={Link} to="/">
              <Button className="nav-button" color="link">About</Button>
            </NavLink>
          </NavItem>
          <div className="separator"/>
          <NavItem>
            <NavLink tag={Link} to="/">
              <Button className="nav-button" color="link">Contact Us</Button>
            </NavLink>
          </NavItem>
        </div>
      </Nav>
    </Navbar>
  </div>
);


export default MainMenuView;
