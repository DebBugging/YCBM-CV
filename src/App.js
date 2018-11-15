import React, { Component } from "react";

import Header from "./Components/Header";

import Main from "./Components/Main";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
