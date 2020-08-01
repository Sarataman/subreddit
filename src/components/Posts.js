import React, { Component } from "react";
import Search from "./components/Search";
import PostLists from "./components/PostLists";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchField: "",
    };
  }

  postSearch = (e) => {
    e.preventDefault();
    fetch("https://www.reddit.com/.json")
      .query({ q: this.state.searchField })
      .then((res) => res.json())
      .then((data) => data.children.data.map((data) => data.data))
      .catch((err) => console.log(err));
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <Search bookSearch={this.postSearch} handleSearch={this.handleSearch} />
        <PostLists posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;
