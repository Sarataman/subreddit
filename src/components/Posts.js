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
    getPosts: (text) => dispatch(searchPost(text)),
  };
};

const Posts = ({ search, getPosts }) => {
  console.log("SEARCH: ", search);
  const handleSearch = (text, mostToLeastUpVotes) => {
    getPosts(text, mostToLeastUpVotes);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <PostLists posts={search.posts} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
