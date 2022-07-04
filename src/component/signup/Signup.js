import React from "react";
import "./Signup.css";
import ppl from "../../img/peoplecomp.jpg";

function Signup() {
  return (
    <section className="grid-container signup">
      <div className="col col-1">
        <img src={ppl} alt="People sitting together" />
      </div>
      <div className="col col-2">
        <h2>Create your Connect Account!</h2>
        <div>
          <input name="username" type="text" placeholder="Username" />
        </div>
        <div>
          <input name="firstname" type="text" placeholder="First name" />
        </div>
        <div>
          <input name="lastname" type="text" placeholder="Last name" />
        </div>
        <div>
          <input name="email" type="text" placeholder="Email" />
        </div>
        <div>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn" type="submit">
          Sign up
        </button>
      </div>
    </section>
  );
}

export default Signup;
