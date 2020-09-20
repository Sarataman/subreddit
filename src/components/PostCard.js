import React from "react";

const PostCard = ({ image, title, date, upvotes, link }) => {
  return (
      <div className="col-md-6">
        <div className="card-box">
          <img src={image} className="card-img-top" alt="Post" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{date}</p>
            <a href={link} target="_" className="btn btn-primary">
              Read More
            </a>
            <hr />
            <span className="badge badge-secondary">Upvotes: {upvotes}</span>
          </div>
        </div>
      </div>
  );
};

export default PostCard;
