import React from "react";
import "./Post.css";
import { AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";

function Post(props) {
  return (
    <div className="post-container">
      <h3 className="title">{props.post.title}</h3>
      <hr />
      <div className="description">{props.post.description}</div>
      <hr />
      <div className="post-bottom">
        <span className="like">
          <a className="anchor" href="#">
            <AiOutlineLike color="black" />
          </a>
          <a className="anchor" href="#">
            1
          </a>
        </span>
        <span>
          <a className="anchor" href="#">
            <VscComment />
          </a>
        </span>
        <span>
          <a className="anchor anchor-flex" href="#">
            <span className="bold">{props.post.user.username}</span>
            <span>
              {props.post.user.firstname + " " + props.post.user.lastname}
            </span>
          </a>
        </span>
        {/* "user":{"username":"divyan27","firstname":"Divyank","lastname":"Mishra"} */}
      </div>
    </div>
  );
}

export default Post;
