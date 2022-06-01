import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            <span className="comment-list-title">Comments</span>
            <div className="comment-list-body">
                {comments.map(comment => (
                    <p className="comment-list-text" key={comment._id}>
                        {comment.commentText}
                        <Link to={`/profile/${comment.username}`}>
                            <span className="comment-list-username">{comment.username}</span>
                        </Link>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CommentList;