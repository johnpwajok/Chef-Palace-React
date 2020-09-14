import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";

import "./styles.css";
import FadeIn from "react-fade-in";
import { Alert } from "reactstrap";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      deliveryAddress: "",
      msg: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //check for registration error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (this.props.isAuthenticated) {
      console.log(localStorage.getItem("token"));
      this.props.history.push("/");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const phone = this.state.phone;
    const deliveryAddress = this.state.deliveryAddress;
    //create user object
    const newUser = {
      name,
      email,
      password,
      phone,
      deliveryAddress,
    };

    //attempt registration
    this.props.register(newUser);
  }

  render() {
    return (
      <div>
        <div className="col-md-6 mt-5 mx-auto register">
          <form noValidate onSubmit={this.onSubmit}>
            <h3 className="loginHeadings">Register a New Account</h3>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address</label>
              <input
                type="text"
                className="form-control"
                name="deliveryAddress"
                placeholder="Delivery Address"
                value={this.state.deliveryAddress}
                onChange={this.onChange}
              ></input>
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Sign Up!
            </button>
          </form>
          <br></br>
          <center>
            <h4 style={{ color: "orange", float: "left" }}>
              Already have an account? - <Link to="/login"> Log in</Link>
            </h4>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register })(Register);
