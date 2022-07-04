import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import Signup from "./Signup";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div className="main-flex-container">
      <Nav />
      <Signup />
      <Footer />
    </div>
  );
}

export default SignupPage;
