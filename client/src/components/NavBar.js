/*jshint esversion: 8 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logout from "./Logout";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("userToken");
    this.props.history.push("/");
  }

  render() {
    const navbar = { backgroundColor: "#F16E10" };
    const loginRegistrationLink = (
      <ul className="navbar-nav mr-auto justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Logout></Logout>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/menu">
            <span class="oi oi-magnifying-glass"></span>Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            <span class="oi oi-magnifying-glass"></span>Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/basket">
            My Basket
          </Link>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link" onClick={this.logOut.bind(this)}>
            Log Out
          </a>
        </li>
      </ul>
    );

    return (
      //Create navbar (dark with dark backgrond and rounded corners) using style={navbar} for orange background
      <nav
        className="navbar navbar-expand-lg navbar-dark  rounded"
        style={navbar}
      >
        {/*Collapse navbar to "hamburger" button for mobile viewport */}
        <ul className="navbar-nav">
          <li className="navbar-brand">Chef Palace</li>
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbar1"
          className="collapse navbar-collapse justify-content-md-center"
        >
          {/*If user is logged in, display userLink values else user loginRegistrationLink values*/}
          {localStorage.userToken ? userLink : loginRegistrationLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
