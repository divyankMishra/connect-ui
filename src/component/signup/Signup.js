import React from "react";
import "./Signup.css";
import ppl from "../../img/peoplecomp.jpg";
import { useState } from "react";
import { validUsername, validEmail } from "../../util/validations";
import { signup } from "../service/SignUp";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setformErrors] = useState({});
  const [btn, setbtn] = useState("");
  const [apiErrors, setapiErrors] = useState(null);
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
  function extractError(field) {
    if (formErrors[field])
      return <span className="small error">* {formErrors[field]}</span>;
  }
  function changeEvent(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleChange(e) {
    let errorFound = false;
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        if (!value.trim()) {
          setformErrors({
            ...formErrors,
            firstname: "Please provide First Name!",
          });
          errorFound = true;
        } else delete formErrors[name];
        setUser({ ...user, firstname: value });
        break;
      case "lastname":
        setUser({ ...user, lastname: value });
        break;

      case "username":
        if (!value.trim() || !validUsername(value)) {
          setformErrors({
            ...formErrors,
            username: "Please provide Proper Username!",
          });
          errorFound = true;
        } else delete formErrors[name];
        setUser({ ...user, username: value });
        break;
      case "email":
        if (!value.trim() || !validEmail(value)) {
          setformErrors({
            ...formErrors,
            email: "Please provide Proper Email!",
          });
          errorFound = true;
        } else delete formErrors[name];
        setUser({ ...user, email: value });
        break;
      case "password":
        setUser({ ...user, password: value });
        break;
      case "confirmPassword":
        setUser({ ...user, confirmPassword: value });
        break;
      default:
        break;
    }
    console.log(JSON.stringify(formErrors));
    console.log(formErrors, Object.keys(formErrors).length === 0);
    if (!(Object.keys(formErrors).length === 0) || errorFound) {
      setbtn("disabled");
      console.log("aaaa");
    } else {
      setbtn("");
      console.log("bbbbb");
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let response = await signup(user);
    if (response.error) {
      let errorArray = [];
      for (const key in response.body) {
        errorArray.push(...response.body[key]);
      }
      errorArray = new Set(errorArray);
      setapiErrors([...errorArray]);
    } else {
      setapiErrors([]);
    }
  }

  return (
    <section className="grid-container signup">
      <div className="col col-1">
        <img src={ppl} alt="People sitting together" />
      </div>
      <div className="col col-2">
        <form className="col-2" onSubmit={submitForm}>
          <h2>Create your Connect Account!</h2>
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
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.username}
            />
            {extractError("username")}
          </div>
          <div>
            <input
              name="firstname"
              type="text"
              placeholder="First name"
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.firstname}
            />
            {extractError("firstname")}
          </div>
          <div>
            <input
              name="lastname"
              type="text"
              placeholder="Last name"
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.lastname}
            />
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.email}
            />
            {extractError("email")}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.password}
            />
          </div>
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onBlur={handleChange}
              onChange={changeEvent}
              value={user.confirmPassword}
            />
          </div>
          <button
            className="btn"
            type="submit"
            disabled={btn ? "disabled" : ""}
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
