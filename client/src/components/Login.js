import React, { Component } from "react";
import "./styles.css";

//import { login } from "./MainFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      userPassword: "",
      newEmailAddress: "",
      newUserPassword: "",
      phoneNumber: "",
      deliveryAddress: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      emailAddress: this.state.emailAddress,
      userPassword: this.state.userPassword,
    };

    // login(user).then((res) => {
    //   if (res) {
    //     console.log("res: ", res);
    //     this.props.history.push("/profile");
    //   } else {
    //     alert("Invalid email address or password. Please try again!");
    //   }
    // });
  }

  createAccount(e) {
    e.preventDefault();

    const newUser = {
      newEmailAddress: this.state.newEmailAddress,

      newUserPassword: this.state.newUserPassword,
      phoneNumber: this.state.phoneNumber,
      deliveryAddress: this.state.deliveryAddress,
    };

    // login(user).then((res) => {
    //   if (res) {
    //     console.log("res: ", res);
    //     this.props.history.push("/profile");
    //   } else {
    //     alert("Invalid email address or password. Please try again!");
    //   }
    // });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5 mt-5 col-lg-10 col-md-10 col-sm-10 mx-auto">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Sign up or login to your account!</h1>
          </div>
        </div>

        <div className="register"></div>

        <div className="row">
          <div className="col-md-6 mt-5 mx-auto login">
            <form noValidate onSubmit={this.onSubmit}>
              <h3 className="loginHeadings">Login to Your Account</h3>

              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={this.state.emailAddress}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="userPassword"
                  placeholder="Password"
                  value={this.state.userPassword}
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
          </div>
          {/* Registration div */}
          <div className="col-md-6 mt-5 mx-auto register">
            <form noValidate onSubmit={this.onSubmit}>
              <h3 className="loginHeadings">Register a New Account</h3>

              <div className="form-group">
                <label htmlFor="newEmailAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="newEmailAddress"
                  placeholder="Email Address"
                  value={this.state.newEmailAddress}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="newUserPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newUserPassword"
                  placeholder="Password"
                  value={this.state.newUserPassword}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={this.state.phoneNumber}
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign Up!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
