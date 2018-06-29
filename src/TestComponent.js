import React, { Component, Fragment } from "react";

export default class TestComponent extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/users")
      .then(res => res.json())
      .then(res =>
        this.setState({
          users: [...res]
        })
      );
  }

  render() {
    const users = this.state.users.map((user, index) => {
      return <li key={index}>name: {user.name}</li>;
    });
    console.log(this.state.users);
    return (
      <Fragment>
        {Object.keys(this.state).length !== 0 ? (
          <div>
            <h2>Users</h2>
            <ul>{users}</ul>
          </div>
        ) : (
          <h1>loading...</h1>
        )}
      </Fragment>
    );
  }
}
