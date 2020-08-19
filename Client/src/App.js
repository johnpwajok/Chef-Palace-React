/*jshint esversion: 8 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "../node_modules/react-router-dom";

import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
