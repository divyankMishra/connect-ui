import React, { useState } from "react";
import ppl from "../../img/peoplecomp.jpg";
import "./LogIn.css";
import { login } from "../service/Login";
import { useNavigate } from "react-router-dom";
import HomePage from "../home/HomePage";

function LogIn() {
  let navigate = useNavigate();
  const [apiErrors, setapiErrors] = useState(null);

  const [loginForm, setloginForm] = useState({
    username: "",
    password: "",
  });

  function changeEvent(e) {
    const { name, value } = e.target;
    setloginForm({ ...loginForm, [name]: value });
  }

  function apiErr(err) {
    if (err) {
      return err.map((el, index) => (
        <li key={index}>
          <span>{el}</span>
          <br />
        </li>
      ));
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let response = await login(loginForm);
    if (response.error) {
      let errorArray = [];
      console.log(response.body.length);
      for (const key in response.body) {
        !response.body.length
          ? errorArray.push(response.body[key])
          : errorArray.push(...response.body[key]);
      }
      errorArray = new Set(errorArray);
      setapiErrors([...errorArray]);
    } else navigate("/home");
  }

  return (
    <section className="grid-container login">
      <div className="col col-1">
        <img src={ppl} alt="People sitting together" />
      </div>
      <div className="col col-2">
        <form onSubmit={submitForm} className="col-2">
          <h2>Log in your Connect Account!</h2>
          <div
            className="form-error-block"
            style={apiErrors && apiErrors.length > 0 ? {} : { display: "none" }}
          >
            {apiErr(apiErrors)}
          </div>
          <div>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={changeEvent}
              value={loginForm.username}
            />
            {/* <span className="small error">* This is error message</span>
          <br />
          <span className="small error">* This is error message</span> */}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={changeEvent}
            />
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
