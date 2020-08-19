/*jshint esversion: 8 */

import React, { Component } from "react";
import "./styles.css";

import logo from "../images/logo.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <title>HomePage</title>

        <header>
          <div class="container-fluid" id="container-head">
            <center>
              <img
                src={logo}
                alt="Chef Palace Logo"
                class="img-responsive"
              ></img>
              <br></br>
              <h2>Chef Palace Thai & Chinese Takeaway</h2>
              <br></br>
            </center>
          </div>
        </header>

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

        <div class="container-fluid">
          <section>
            <br></br>
            <br></br>
            <text>
              Hello and welcome to the Chef Palace Thai and Chinese Take Away
              website!
              <br></br>
              Our service is to provide you with the most satifsactory and
              pleasing meals in all of Dublin!<br></br>
              Please feel free to browse our website which will give you more
              infomation<br></br>
              about our resturant, and also place an order if you're feeling
              hungry!<br></br>
              <a href="Account.html">Sign Up here </a> to recieve exclusive
              offers & deals!
            </text>
            <br></br>
          </section>
        </div>
      </div>
    );
  }
}
