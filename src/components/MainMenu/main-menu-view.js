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
import preNatalSymbol from '../../images/pregnant.png'
import SearchBar from "../SearchBar";

const MainMenuView = () => (
  <div>
    <Navbar color="light" light expand="md" className="mb-3">
      <NavbarBrand>
        <img src={preNatalSymbol} width={"50px"} alt="hubspot symbol"/>
      </NavbarBrand>
      <Nav className="w-100" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            <Button outline color="info">Home</Button>
          </NavLink>
        </NavItem>
        <SearchBar />

      </Nav>
    </Navbar>
  </div>
);


export default MainMenuView;
