import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import FadeIn from "react-fade-in";

//import { login } from "./MainFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <FadeIn>
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto login">
              <form noValidate onSubmit={this.onSubmit}>
                <h3 className="loginHeadings">Login to Your Account</h3>

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
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Log In
                </button>
              </form>
              <br></br>
              <center>
                <h4 style={{ color: "orange", float: "left" }}>
                  Don't have have an account? -{" "}
                  <Link to="/register"> Register</Link>
                </h4>
              </center>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Login;
