import React from "react";
import PostCard from "./PostCard";

const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post, i) => {
        return (
          <PostCard
            key={post.id}
            image={""}
            title={post.title}
            date={post.created}
            upvotes={post.ups}
            link={post.url}
          />
        );
      })}
    </div>
  );
};

export default PostList;
