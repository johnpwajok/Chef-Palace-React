import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default" id="navbarchef">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Chef Palace
              </a>
            </div>

            <ul class="nav navbar-nav" id="navwords">
              <li>
                <a href="Home.html">Home</a>
              </li>
              <li>
                <a href="Contact.html">Contact</a>
              </li>
              <li>
                <a href="About.html">About</a>
              </li>
              <li>
                <a href="Account.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
