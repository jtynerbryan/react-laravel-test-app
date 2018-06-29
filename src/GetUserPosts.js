import React, { Component, Fragment } from "react";

export default class GetUserPosts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/users/1/posts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          posts: res
        })
      );
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <li key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      );
    });
    return (
      <Fragment>
        <ul>{posts}</ul>
      </Fragment>
    );
  }
}
