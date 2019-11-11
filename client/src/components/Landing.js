import React, { Component } from "react";
import Logo from "../images/instagram-logo.png";
import iosLogo from "../images/ios.png";
import androidLogo from "../images/google.png";
import { register } from "./getUsers";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      user_name: "",
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

    const newUser = {
      first_name: this.state.first_name,
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password
    };

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
      color: "#fff"
    };
    return (
      <div className='container'>
        <div className='phone-image'></div>
        <div className='form-block'>
          <form noValidate onSubmit={this.onSubmit}>
            <div className='logo'>
              <img src={Logo} alt='logo' />
            </div>
            <p className='tag-line'>
              {" "}
              Sign up to see photos and videos from your friends.{" "}
            </p>
            <button type='submit' className='form-btn'>
              {" "}
              <a href='https://www.facebook.com/' style={linkStyle}>
                {" "}
                Log in With Facebook{" "}
              </a>
            </button>

            <span className='divider'> Or </span>
            <input
              type='text'
              placeholder='Mobile Number or Email'
              name='email'
              onChange={this.onChange}
            />
            <input
              type='text'
              name='first_name'
              onChange={this.onChange}
              placeholder='Full Name'
            />
            <input
              type='text'
              name='user_name'
              placeholder='Username'
              onChange={this.onChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={this.onChange}
            />
            <button type='submit' className='form-btn'>
              {" "}
              Sign Up{" "}
            </button>

            <div className='foot-line'>
              <span>
                By signing up, you agree to our <strong>Terms</strong> ,{" "}
                <strong>Data Policy</strong> and <strong>Cookies Policy</strong>{" "}
                .
              </span>
            </div>
          </form>

          <div className='sign-up'>
            Have an account? <a href='/login'> Log in </a>
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

export default Landing;
