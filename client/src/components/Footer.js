import React from "react";
import "../App.css";

const Footer = () => {
  const footStyle = {
    marginTop: 85
  };

  return (
    <footer style={footStyle}>
      <div className='container'>
        <nav className='footer-nav'>
          <ul>
            <li>
              {" "}
              <a href='#'> About Us </a>
            </li>
            <li>
              {" "}
              <a href='#'> Support </a>
            </li>
            <li>
              {" "}
              <a href='#'> Press </a>
            </li>
            <li>
              {" "}
              <a href='#'> Api </a>
            </li>
            <li>
              {" "}
              <a href='#'> Jobs </a>
            </li>
            <li>
              {" "}
              <a href='#'> Privacy </a>
            </li>
            <li>
              {" "}
              <a href='#'> Terms</a>
            </li>
            <li>
              {" "}
              <a href='#'> Directory </a>
            </li>
            <li>
              <a href='#'> Profiles </a>
            </li>
            <li>
              <a href='#'> Hashtags </a>
            </li>
            <li>
              <a href='#'> Languages </a>
            </li>
          </ul>
        </nav>
        <div class='copyright-notice'> 2019 Instagram From Facebook</div>
      </div>
    </footer>
  );
};

export default Footer;
