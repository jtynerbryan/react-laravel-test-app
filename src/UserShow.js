import React, { Component, Fragment } from "react";

export default class UserShow extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/users/50", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          user: res
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <h1>user</h1>
      </Fragment>
    );
  }
}
