import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import { Link } from 'react-router-dom';
import CommentList from '../components/CommentList';

function SinglePost() {
    
    const { id: postId } = useParams();
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId },
    });
    console.log("Hello", postId, data);

    const post = data?.post || {};
    if(loading){
        return <p>Loading...</p>
    }
    console.log("post", post);
    
    return (
        <div className="single-post">
            <div className="post-card">
                <div className="post-header">
                    <Link to={`/profile/${post.username}`}>
                        <h3 className="username">{post.username}</h3>
                    </Link>
                    <h3 className="date">{post.dateNeeded}</h3>
                </div>
                <div className="post-body">
                    <p className="post-text">{post.postText}</p>
                </div>
                <div className="post-comments">
                    {post.commentCount > 0 && <CommentList comments={post.comments} />}
                </div>
                <span className="time"> Posted at {post.createdAt}</span>

            </div>
        </div>
    );

                 
}

export default SinglePost;