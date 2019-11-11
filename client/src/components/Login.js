import React, { Component } from "react";
import { login } from "./getUsers";
import Logo from "../images/instagram-logo.png";
import iosLogo from "../images/ios.png";
import androidLogo from "../images/google.png";
import "../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    });
  }

  render() {
    const formStyle = {
      paddingTop: 70,
      paddingLeft: 280
    };
    return (
      <div className='container' style={formStyle}>
        <div className='form-block'>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='logo'>
              <img src={Logo} alt='logo' />
            </div>

            <input
              type='text'
              placeholder='Phone number, username, or email'
              name='email'
              onChange={this.onChange}
              value={this.state.email}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
            />
            <button type='submit' className='form-btn'>
              {" "}
              Log In{" "}
            </button>

            <span className='divider'> Or </span>

            <div className='foot-line'>
              <span>
                <a href='#'>Log In with Facebook </a>
                <a href='#'>Forgot password?</a>
              </span>
            </div>
          </form>

          <div className='sign-up'>
            Don't have an account? <a href='/login'> Sign Up </a>
          </div>

          <div className='get-app'>
            <span> Get the app. </span>
            <div className='badges'>
              <img src={iosLogo} alt='ios badge' />
              <img src={androidLogo} alt='android badge' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
