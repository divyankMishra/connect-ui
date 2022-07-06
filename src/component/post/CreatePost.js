import React from "react";
import "./CreatePost.css";

function CreatePost() {
  return (
    <form action="" className="post-container create-post-container">
      <h2>Create Post!</h2>
      <input type="text" placeholder="Title" />
      <textarea name="" placeholder="Start a post" id=""></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
