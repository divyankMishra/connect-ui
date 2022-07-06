import React, { useState, useEffect } from "react";
import "./Post.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";

function Post(props) {
  const [like, setlike] = useState({ likeState: false, likeCount: 0 });
  const [isHovered, setisHovered] = useState({ isHovered: false });
  const handleMouseEnter = () => {
    setisHovered({ isHovered: true });
  };
  const handleMouseLeave = () => {
    setisHovered({ isHovered: false });
  };
  useEffect(() => {
    setlike(props.post.likes);
  }, [props.post.likes]);

  function renderbtn(like) {
    if (like.likeState)
      return (
        <AiFillLike
          className="liked"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          fill={isHovered.isHovered ? "#000" : "#0197f6ff"}
        />
      );
    return (
      <AiOutlineLike
        className="unliked"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        fill={isHovered.isHovered ? "#0197f6ff" : "#000"}
      />
    );
  }

  return (
    <div className="post-container">
      <h3 className="title">{props.post.title}</h3>
      <hr />
      <div className="description">{props.post.description}</div>
      <hr />
      <div className="post-bottom">
        <span className="like">
          <a className="anchor" href="#">
            {renderbtn(like)}
          </a>
          <a className="anchor" href="#">
            {like.likeCount}
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
