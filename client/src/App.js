import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Basket from "./components/Basket";
import Menu from "./components/Menu";

class App extends Component {
  // constructor added for express
  constructor(props) {
    super(props);
    this.state = {};
    this.connectToServer = this.connectToServer.bind(this);
  }
  connectToServer() {
    fetch("/");
  }
  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/basket" component={Basket} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
