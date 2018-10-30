import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands";
import WandsList from "./WandsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://images.ctfassets.net/bxd3o8b291gf/1uzo3DWrgwqEsWOWiYUoEA/040d2edea8acdc419a0788552d42c642/WW_Hero_Image.jpg"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Ollivander's Wand Shop!</h1>
        </header>
        <p className="App-intro bg-warning">
          <div className="container-fluid bg-danger p-3" />
          <div className="container ">
            <WandsList wands={wands} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
