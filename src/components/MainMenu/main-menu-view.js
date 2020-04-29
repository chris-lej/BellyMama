import React from 'react';
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import Symbol from '../../images/symbol.png'
import SearchBar from "../SearchBar";
import './main-menu.css'

const MainMenuView = () => (
  <div>
    <Navbar light expand="md">
      <NavbarBrand>
        <img src={Symbol} width={"50px"} alt="belly mama symbol"/>
      </NavbarBrand>
      <Nav className="w-100 navbar-content justify-content-between" navbar>
        <SearchBar navBar />
        <div className="d-flex">
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
