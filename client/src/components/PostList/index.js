import React from "react";
import { Link } from "react-router-dom"


function Posts ( { posts, title } ) { 
    if(!posts.length){
        return <h3>No posts yet</h3>;
    }
    return(
        <div className="post-container">
            <h3 className="title">{title}</h3>     
            <div className="all-posts">
                {posts.map (post => (
                <div key={post._id} className="post">
                    <div className="post-user-info">
                        <Link to={`/profile/${post.username}`}>
                            <h3 className="username">{post.username}</h3>
                        </Link>{' '}
                        <p className="date">{post.dateNeeded}</p>
                    </div>
                    <div className="description">
                        <Link  className="post-content" to={`/post/${post._id}`}>
                            <p className="post-text">{post.postText}</p>
                            <p className="comments">Comments: {post.commentCount} Click to {''} 
                            {post.commentCount ? 'see' : 'start '} the discussion</p>
                        </Link>
                            <span className="time">{post.createdAt}</span>
                     
                    </div>
                </div>
            ))} 
            </div>
        </div>
    )
}

export default Posts;