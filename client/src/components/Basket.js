import React, { Component } from "react";
//from react-redux
import { connect } from "react-redux";

import PropTypes from "prop-types";

export class Basket extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <div class="jumbotron">
            <h1 class="display-4">Your Basket</h1>
            <br></br> <hr class="my-4"></hr>
            <p>Basket is currently under development!</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 style={{ color: "red" }}>
            You must be logged in to view this page
          </h1>
        </div>
      );
    }
  }
}

//function to map the state of the irems to props
const mapStateToProps = (state) => ({
  // menuItem: state.menuItem,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Basket);
