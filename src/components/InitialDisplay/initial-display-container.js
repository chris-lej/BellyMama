import React, { Component } from 'react';
import SearchBar from "../SearchBar/search-bar";
import LogoProfile from "../../images/back-main.svg"
import LogoSimples from "../../images/logo-simples.svg"

import './initial-display.css'

class InitialDisplayContainer extends Component {
  render = () => {

    return (
      <div className="row">
      <div className="col-2">
        <img src={LogoSimples} className="logo-simples" />
        <img src={LogoProfile} className="logo-profile" />
      </div>
      <div className="col-10 text-right description-wrapper">
        <p className="description-1">Find  Prenatal, Birth and Postpartum services </p>
        <p className="description-2">in Austin, TX</p>
      </div>

      </div>
    );
  }
}

export default (InitialDisplayContainer);
