import React, { Component } from "react";
import "../DominicanFood/DominicanFood.css";

class DominicanFood extends React.Component {
  render() {
    return (
      <div className="food-page2">
        <div className="lp-wrapper2">
          <div className="lp-image2">ES HORA DE COMER!</div>
        </div>

        <h1 className="dr">Dominican Republic Foods</h1>
        <div className="dr-pics">
          <div className="food1">
            <h2>Mangu</h2>
          </div>
          <div className="food2">
            {" "}
            <h2>Pastelitos</h2>
          </div>
          <div className="food3">
            {" "}
            <h2>Chimi</h2>
          </div>
        </div>

        <h1 className="dr">Colombian Foods (the better options)</h1>
        <div className="dr-pics">
          <div className="food4">
            <h2>Bandeja Paisa</h2>
          </div>
          <div className="food5">
            {" "}
            <h2>Sancocho</h2>
          </div>
          <div className="food6">
            {" "}
            <h2>Salchipapa</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DominicanFood;
