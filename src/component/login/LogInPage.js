import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import LogIn from "./LogIn";

function LogInPage() {
  return (
    <div className="main-flex-container">
      <Nav />
      <LogIn />
      <Footer />
    </div>
  );
}

export default LogInPage;
