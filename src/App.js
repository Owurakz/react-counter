import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Functionalcounter from "./Functionalcounter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  increaseNum = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decreaseNum = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Class Fast fingers</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.increaseNum}>increase count</button>
        <button onClick={this.decreaseNum}>decrease count</button>
        <br />
        <br />

        <Functionalcounter />
      </div>
    );
  }
}

export default App;
