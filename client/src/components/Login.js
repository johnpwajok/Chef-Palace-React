import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authActions";

import "./styles.css";
import FadeIn from "react-fade-in";
import { Alert } from "reactstrap";

export class Login extends Component {
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

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //check for login error
      if (error.id === "LOGIN_FAIL") {
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

    const email = this.state.email;
    const password = this.state.password;

    const user = {
      email,
      password,
    };

    //attempt login
    this.props.login(user);
  }

  render() {
    return (
      <div>
        <FadeIn>
          <div className="col-md-6 mt-5 mx-auto register">
            <form noValidate onSubmit={this.onSubmit}>
              <h3 className="loginHeadings">Login to your account</h3>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}

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
                Login
              </button>
            </form>
            <br></br>
            <center>
              <h4 style={{ color: "orange", float: "left" }}>
                Don't have an account? - <Link to="/register"> Register</Link>
              </h4>
            </center>
          </div>
        </FadeIn>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
