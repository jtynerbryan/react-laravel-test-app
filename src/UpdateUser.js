import React, { Component } from "react";

const data = {
  name: "John Tyner",
  email: "jfkt@gmail.com",
  password: "1234456677"
};

export default class UpdateUser extends Component {
  componentDidMount() {
    fetch("http://localhost:8000/api/users/51", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <h1>updating user</h1>
      </div>
    );
  }
}
