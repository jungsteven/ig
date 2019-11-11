import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      user_name: "",
      email: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      user_name: decoded.user_name,
      email: decoded.email,
      password: decoded.password
    });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <div>
            <h1>INFO</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{this.state.user_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{this.state.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
