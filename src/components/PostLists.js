import React from "react";
import PostCard from "./PostCard";

const PostList = (props) => {
  return (
    <div className="container">
      <div className="row" id="posts">
        {props.posts.map((post, i) => {
          return (
            <PostCard
              key={post.id}
              image={
                // {post.preview.images[0].source.url}
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
    </div>
  );
};

export default PostList;
