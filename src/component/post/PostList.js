import React from "react";
import Post from "./Post";

function PostList(props) {
  function renderpost(posts) {
    return posts.map((el) => <Post key={el.id} post={el} />);
  }

  return <div>{renderpost(props.posts)}</div>;
}

export default PostList;
