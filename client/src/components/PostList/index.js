import React from "react";


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
                        <h3 className="username">{post.username}</h3>  
                    </div>
                    <div className="description">
                        <span className="post-text">{post.postText}</span>
                        <span className="time">{post.createdAt}</span>
                    </div>
                </div>
            ))} 
            </div>
        </div>
    )
}

export default Posts;