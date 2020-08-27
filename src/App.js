import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import MainMenu from "./components/MainMenu";

import "./App.css";

const App = () => (
  <Router>
    <MainMenu />
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faq" component={FAQ} />
    </div>
  </Router>
);

export default App;
