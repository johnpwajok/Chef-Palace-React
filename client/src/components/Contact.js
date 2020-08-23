import React, { Component } from "react";
import "./styles.css";
import FadeIn from "react-fade-in";

export default class Contact extends Component {
  render() {
    return (
      <div class="container" className="contactContainer">
        <FadeIn>
          <div class="row" className="outerContact">
            <textheading> Our Locations!</textheading>
            <br></br>
            <br></br>
            <div class="col-md-6 col-sm-12" className="mapDiv">
              <iframe
                class="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d152285.06621937343!2d-6.498099450100997!3d53.3888153001904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schef%20palace!5e0!3m2!1sen!2sie!4v1598199689458!5m2!1sen!2sie"
              ></iframe>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12" className="aboutDiv">
              <br></br>

              <text>
                <dl>
                  <dt>5 Sweeney Mews, Ongar Village, Dublin, D15</dt>
                  <dd>- 01-822 3818 / 822 3828</dd>
                  <br></br>
                  <dt>5C Tyrrelstown Way, Cruiserath, Dublin, D15 E3C9</dt>
                  <dd>- 01-885 6011 / 827 4629</dd>
                  <br></br>
                  <dt>1 & Main St, Ballymun, Dublin</dt>
                  <dd>- 01-802 6478 / 802 6482</dd>
                  <br></br>
                  <dt>Main St, Portan, Clonee, Co. Meath</dt>
                  <dd>- 01-826 1762 / 826 1763</dd>
                  <br></br>
                </dl>
              </text>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}
