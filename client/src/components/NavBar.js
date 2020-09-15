/*jshint esversion: 8 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Logout from "./Logout";

class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const navbar = { backgroundColor: "#F16E10" };
    const loginRegistrationLink = (
      <div
        id="navbar1"
        className="collapse navbar-collapse justify-content-right"
      >
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
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login <i class="fas fa-sign-in-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    );

    const userLink = (
      <div
        id="navbar1"
        className="collapse navbar-collapse justify-content-right"
      >
        <ul className="navbar-nav mr-auto justify-content-end">
          <li className="nav-item">
            <span className="navbar-text mr-3">
              <strong>{user ? `Welcome ${user.name}` : null}</strong>
            </span>
          </li>
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
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link className="nav-link" to="/basket">
              My Basket <i class="fas fa-shopping-basket"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Logout></Logout>
          </li>
        </ul>
      </div>
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

        {/* <div
          id="navbar1"
          className="collapse navbar-collapse justify-content-right"
        > */}
        {/*If user is logged in, display userLink values else user loginRegistrationLink values*/}
        {isAuthenticated ? userLink : loginRegistrationLink}
        {/* </div> */}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, null)(Navbar));
