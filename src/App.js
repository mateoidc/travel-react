import React, { Component } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import DominicanFood from "./Components/DominicanFood/DominicanFood";
import Locations from "./Components/Locations/Locations";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <DominicanFood />
      <Locations />
    </div>
  );
}

export default App;
