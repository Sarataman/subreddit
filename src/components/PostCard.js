import React from 'react';

const PostCard = (props) => {
    return(
        <div class="card">
            <img src="{props.preview.images}" class="card-img-top" alt="Post"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.all_awardings.start_date}</p>
                <a href="{props.url}" target="_blank" class="btn btn-primary">Read More</a>
                <hr/>
                <span class="badge badge-secondary">Upvotes: {props.ups}</span>
            </div>
        </div>
    );
}

export default PostCard;