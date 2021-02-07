import React, { Component } from "react";
import "../Locations/Locations.css";

class Locations extends React.Component {
  render() {
    return (
      <div className="food-page2">
        <div className="lp-wrapper2">
          <div className="lp-image3">ES HORA DE VIAJAR!</div>
        </div>
        <h1 className="dr">Dominican Republic Spots</h1>
        <div className="dr-pics">
          <div className="spot1">
            <h2>Punta Cana</h2>
          </div>
          <div className="spot2">
            {" "}
            <h2>Saona</h2>
          </div>
          <div className="spot3">
            {" "}
            <h2>San Juan</h2>
          </div>
        </div>
        <h1 className="dr">Colombian Spots</h1>
        <div className="dr-pics">
          <div className="spot4">
            <h2>Cartagena</h2>
          </div>
          <div className="spot5">
            {" "}
            <h2>Medellin</h2>
          </div>
          <div className="spot6">
            {" "}
            <h2>San Andres</h2>
          </div>
        </div>
        <div className="lp-wrapper2">
          <div className="lp-image4">Covid 19 Cases</div>
        </div>
        <div className="covid-wrapper">
          <div className="covid1">
            <h3> Colombia Cases</h3>
            <div className="covidcases">
              <h4>Current Cases: 2.13 Million</h4>
              <h4>Deaths: 55k</h4>
            </div>
          </div>
          <div className="covid2">
            {" "}
            <h3> Dominican Cases</h3>
            <div className="covidcases">
              <h4>Current Cases: 217 Thousand</h4>
              <h4>Deaths: 2700</h4>
            </div>
          </div>
        </div>

        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>

        <div className="lp-wrapper2">
          <div className="lp-image5">TRAVELING IS ESSENTIAL</div>
        </div>
        <div className="lp-wrapper2">
          <div className="lp-image6">
            MAKE TRAVELING A PRIORITY IN YOUR LIFE
          </div>
        </div>

        <div className="lp-wrapper10">
          <div className="pics">
            <div className="lp-image10">LIVE</div>
            <div className="lp-image11">YOUR</div>
            <div className="lp-image12">BEST</div>
            <div className="lp-image13">LIFE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
