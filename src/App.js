import React, { Component } from "react";
import Booklist from "./Booklist";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This is our Application.</h1>
        <Booklist />
      </div>
    );
  }
}
