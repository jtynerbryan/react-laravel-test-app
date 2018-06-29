import React, { Component } from "react";

export default class DeleteResource extends Component {
  componentDidMount() {
    fetch("http://localhost:8000/api/users/32", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <h1>deleting resource</h1>
      </div>
    );
  }
}
