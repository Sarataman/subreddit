import React from "react";
import PostCard from "./PostCard";

const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post, i) => {
        return (
          <PostCard
            key={post.id}
            image={
              "https://5starsloans.com/wp-content/uploads/2018/04/2019-08-21_13-45-18.png"
            }
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
