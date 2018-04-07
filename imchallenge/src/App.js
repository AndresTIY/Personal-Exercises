import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import store from "./scripts/store";
import Main from "./scripts/components/main";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("SOMETHING");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
