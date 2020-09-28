import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Basket from "./components/Basket";
import Menu from "./components/Menu";
import TestBasket from "./components/TestBasket";

import { loadUser } from "./actions/authActions";

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
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/basket" component={Basket} />
              <Route exact path="/testBasket" component={TestBasket} />
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}
export default App;
