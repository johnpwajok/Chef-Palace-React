import React, { Component } from "react";
import "./styles.css";
//import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-bootstrap/Carousel";

import logo from "../images/logo.png";
import chef from "../images/chef.jpg";
import chef1 from "../images/chef1.jpg";
import chef2 from "../images/chef2.jpg";
import chef3 from "../images/chef3.jpg";
import chef4 from "../images/chef4.jpg";
import spicebag from "../images/spicebag.jpg";
import munchiebox from "../images/munchiebox.jpg";

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

        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={chef} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={chef2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={chef3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <br></br>
        <hr></hr>
        <br></br>

        <div class="container-fluid">
          <center>
            <textheading>Deals of the Week!</textheading>
          </center>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="jumbotron">
                <img src={spicebag} alt="spicebag" class="img-responsive"></img>
                <h2>Spice Bag</h2>
                <text>
                  Used to be : <pricecut>€7.99</pricecut>
                  <br></br>
                  Now : <pricechange>Only €4.99 !</pricechange>
                </text>
              </div>
            </div>

            <div class="col-md-6">
              <div class="jumbotron">
                <img
                  src={munchiebox}
                  alt="munchiebox"
                  class="img-responsive"
                ></img>
                <h2>Munchie Box</h2>
                <text>
                  Used to be : <pricecut> €11.99</pricecut>
                  <br></br>
                  Now : <pricechange> Only €7.99 !</pricechange>
                </text>
              </div>
            </div>
            <div></div>
          </div>
          <br></br>
          <center>
            <text>
              <a href="Account.html">Sign Up </a> To View Our Full Menu!
            </text>
          </center>

          <br></br>
          <hr></hr>
          <br></br>
        </div>
      </div>
    );
  }
}
