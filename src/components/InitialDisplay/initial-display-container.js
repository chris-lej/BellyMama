import React, { Component } from 'react';
import SearchBar from "../SearchBar/search-bar";

class InitialDisplayContainer extends Component {
  render = () => {
    return (
      <div>
        <SearchBar navBar/>
      </div>
    );
  }
}

export default (InitialDisplayContainer);
