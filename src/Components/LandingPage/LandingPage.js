import React, { Component } from "react";
import "../LandingPage/LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className="lp-wrapper">
          <div className="lp-image">
            <button>EXPLORE</button>
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
