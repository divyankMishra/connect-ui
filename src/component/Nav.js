import React from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const location = useLocation();
  let btn = undefined;
  if (location.pathname === "/signup")
    btn = (
      <div className="nav-right-item signup">
        <a href="/login">Login</a>
      </div>
    );
  if (location.pathname === "/login")
    btn = (
      <div className="nav-right-item signup">
        <a href="/signup">Signup</a>
      </div>
    );
  return (
    <nav className="nav--bar">
      <h1 className="nav nav--left">Connect..</h1>
      <div className="nav nav--right">
        <div className="nav-right-item">
          <a href="#">Home</a>
        </div>
        <div className="nav-right-item">
          <a href="#">Contact</a>
        </div>
        {btn}
      </div>
    </nav>
  );
}

export default Nav;
