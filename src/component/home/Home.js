import React from "react";
import CreatePost from "../post/CreatePost";
import PostList from "../post/PostList";
import "./Home.css";

function Home(props) {
  return (
    <section className="grid-container-home">
      <div className="home-col home-col-1">Column 1</div>
      <div className="home-col home-col-2">
        <CreatePost />
        <PostList posts={props.home.posts} />
      </div>
      <div className="home-col home-col-3">Column 3</div>
    </section>
  );
}

export default Home;
