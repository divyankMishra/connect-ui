import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div className="comment">
      <div className="comment-top">
        <span className="bold">{props.comment.user.username}</span>
        <span>
          <span>Time</span> <span>...</span>
        </span>
      </div>
      <div className="comment-comment">{props.comment.comment}</div>
    </div>
  );
}

export default Comment;
