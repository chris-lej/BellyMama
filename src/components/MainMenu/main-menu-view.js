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
import Logo from '../../images/logo.png'
import SearchBar from "../SearchBar";
import './main-menu.css'

const MainMenuView = () => (
  <div>
    <Navbar light expand="md" className="mb-3">
      <NavbarBrand>
        <img src={Logo} width={"250px"} alt="hubspot symbol"/>
      </NavbarBrand>
      <Nav className="w-100 navbar-content" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            <Button outline color="secondary">About</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/">
            <Button outline color="secondary">Contact Us</Button>
          </NavLink>
        </NavItem>
        <SearchBar />
      </Nav>
    </Navbar>
  </div>
);


export default MainMenuView;
