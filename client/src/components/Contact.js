import React, { Component } from "react";
import "./styles.css";

export default class Contact extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6" className="mapDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.7637378463774!2d-6.40249544843722!3d53.38327667988863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486772ae4d2921f3%3A0xe4debe1ff05a64c2!2sChef+Thai+%26+Chinese+Takeaway!5e0!3m2!1sen!2sie!4v1510599710533"
              width="500"
              height="450"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-md-6" className="aboutDiv">
            <textheading> Our Locations!</textheading>

            <br></br>

            <text>
              <dl>
                <dt>Unit 4, Coolmine Buisness Park, Clonsilla Road, D15</dt>
                <dd>- 01-822 3818 / 822 3828</dd>
                <br></br>
                <dt>Unit 5, Black C, Tyrrelstown, Dublin 15</dt>
                <dd>- 01-885 6011 / 827 4629</dd>
                <br></br>
                <dt>1 & 3 Eagle Court, Main Street, Clonee Village, D15</dt>
                <dd>- 01-802 6478 / 802 6482</dd>
                <br></br>
                <dt>Unit 5, Sweeney Mews, Ongar Village, D15</dt>
                <dd>- 01-826 1762 / 826 1763</dd>
                <br></br>
              </dl>
            </text>
          </div>
        </div>
      </div>
    );
  }
}
