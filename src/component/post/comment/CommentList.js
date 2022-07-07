import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  function renderComments(comments) {
    return comments.map((el) => <Comment key={el.id} comment={el} />);
  }

  return renderComments(props.comments);
}

export default CommentList;
