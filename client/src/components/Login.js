import React, { Component } from "react";
import "./styles.css";

//import { login } from "./MainFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      userPassword: "",
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
              <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
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
          <div className="col-md-6 mt-5 mx-auto register">
            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
