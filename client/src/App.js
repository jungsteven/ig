import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div id='wrapper'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
