import React from "react";
import "./Footer.css";
import github from "../img/github.svg";
function Footer() {
  return (
    <footer className="container">
      <div className="links-row">
        <a href="#">
          <img src={github} alt="Github Logo" />
          <div>Github</div>
        </a>

        <a href="#">
          <img src={github} alt="Github Logo" />
          <div>Github</div>
        </a>

        <a href="#">
          <img src={github} alt="Github Logo" />
          <div>Github</div>
        </a>

        <a href="#">
          <img src={github} alt="Github Logo" />
          <div>Github</div>
        </a>

        <a href="#">
          <img src={github} alt="Github Logo" />
          <div>Github</div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
