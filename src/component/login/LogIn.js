import React from "react";
import ppl from "../../img/peoplecomp.jpg";
import "./LogIn.css";

function LogIn() {
  return (
    <section className="grid-container login">
      <div className="col col-1">
        <img src={ppl} alt="People sitting together" />
      </div>
      <div className="col col-2">
        <form action="" method="post" className="col-2">
          <h2>Log in your Connect Account!</h2>
          {/* <div className="form-error-block">
          <span>Username or Password is Incorrect!</span>
        </div> */}
          <div>
            <input name="username" type="text" placeholder="Username" />
            {/* <span className="small error">* This is error message</span>
          <br />
          <span className="small error">* This is error message</span> */}
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <button className="btn" type="submit">
            LOG IN
          </button>
        </form>
      </div>
    </section>
  );
}

export default LogIn;
