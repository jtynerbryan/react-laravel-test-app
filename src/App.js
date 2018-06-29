import React, { Component } from "react";
import "./App.css";
import GetUserPosts from "./GetUserPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetUserPosts />
      </div>
    );
  }
}

export default App;
