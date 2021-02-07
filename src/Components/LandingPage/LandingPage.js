import React, { Component } from "react";
import "../LandingPage/LandingPage.css";
import { Link } from "react-scroll";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className="lp-wrapper">
          <div className="lp-image">
            <Link
              activeClass="active"
              to="DominicanFood"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
