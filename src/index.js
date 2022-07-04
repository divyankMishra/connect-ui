import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from "./component/signup/SignupPage";
import LogInPage from "./component/login/LogInPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LogInPage />}></Route>
      <Route path="/" element={<Navigate to="/login" />}></Route>
    </Routes>
  </Router>
);
