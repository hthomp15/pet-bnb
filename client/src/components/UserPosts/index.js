import React from "react";
import { Link } from "react-router-dom";

function UserPosts ( props ) {
    // if(!.length){
    //     return <h3>No posts yet</h3>;
    // }
    const posts = props.posts.posts

    console.log("Yepppppp", props, "these posts baby", posts)
    return(
        <div className="post-container">
            <h3 className="title"> Posts </h3>     
            <div className="all-posts">
                {posts.map (post => (
                <div key={post._id} className="post">
                    <div className="description">
                        <Link to={`/post/${post._id}`}>
                            <p className="dates">{post.dateNeeded}</p>
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

export default UserPosts;
