import React from 'react';
import PostCard from './components/PostCard';

const PostList = (props) => {
    return (
        <div>
            {
             props.posts.map((post, i) => {
                 return <PostCard 
                    key={post.preview.id}
                    image={post.preview.images}
                    title={post.title}
                    date={post.all_awardings.start_date}
                    upvotes={post.ups}
                    link={post.url}
                 />
             })
            }
        </div>
    )
}

export default PostList;
