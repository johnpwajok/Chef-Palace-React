import React, { Component } from "react";
import FadeIn from "react-fade-in";

import group from "../images/group.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <FadeIn>
          <div id="parent">
            <div id="left" class="container-fluid">
              <br></br>

              <div id="div1">
                <textheading>Who are we? </textheading>
                <div id="right">
                  <img
                    src={group}
                    alt="group of chefs"
                    width="100%"
                    height="40%"
                  ></img>
                </div>
                <br></br>
                <text>
                  <p>
                    Our food is continually prepared by Chef Thai and Chinese
                    Take Away experienced chefs using the freshest
                    ingredients,creating a very happy and joyful atmosphere for
                    all of our customers.Did shy say mention enabled through
                    elderly improve. As at so believe account evening behaved
                    hearted is. House is tiled we aware. It ye greatest removing
                    concerns an overcame appetite. Manner result square father
                    boy behind its his. Their above spoke match ye mr right oh
                    as first. Be my depending to believing perfectly concealed
                    household. Point could to built no hours smile sense. On on
                    produce colonel pointed. Just four sold need over how any.
                    In to september suspicion determine he prevailed admitting.
                    On adapted an as affixed limited on. Giving cousin warmly
                    things no spring mr be abroad. Relation breeding be as
                    repeated strictly followed margaret. One gravity son brought
                    shyness waiting regular led ham.
                  </p>
                </text>
                <br></br>

                <textheading>Why choose us?? </textheading>
                <br></br>

                <text>
                  You can find vaity dishes in different flavors including fresh
                  sea food, authentic Japanese sushi . Vegetarian dishes and
                  meals for specific dietary requirements can also be found in
                  our menu. Drawings me opinions returned absolute in. Otherwise
                  therefore did are unfeeling something. Certain be ye amiable
                  by exposed so. To celebrated estimating excellence do. Coming
                  either suffer living her theirs. Furnished do otherwise
                  daughters contented conveying attempted no. Was yet general
                  visitor present hundred too brother fat arrival. Friend are
                  day own either lively new. Did shy say mention enabled through
                  elderly improve. As at so believe account evening behaved
                  hearted is. House is tiled we aware. It ye greatest removing
                  concerns an overcame appetite. Manner result square father boy
                  behind its his. Their above spoke match ye mr right oh as
                  first. Be my depending to believing perfectly concealed
                  household. Point could to built no hours smile sense.
                </text>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}
