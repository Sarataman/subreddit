import React from "react";
import { connect } from "react-redux";

import Search from "./Search";
import PostLists from "./PostLists";
import { searchPost } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (text, mostToLeastUpVotes, posts) =>
      dispatch(searchPost(text, mostToLeastUpVotes, posts)),
  };
};

const Posts = ({ search, getPosts }) => {
  console.log("SEARCH: ", search);
  const handleSearch = (text, mostToLeastUpVotes) => {
    getPosts(text, mostToLeastUpVotes, search.posts);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <PostLists posts={search.posts} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
