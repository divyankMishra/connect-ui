import React, { useEffect } from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import Home from "./Home";
import { useState } from "react";
import { homepage } from "../service/HomePage";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [home, sethome] = useState({ user: {}, posts: [] });
  let navigate = useNavigate();
  useEffect(() => {
    async function callHome() {
      const data = await homepage();
      if (data.error) {
        navigate("/login");
      } else sethome(data.body);
    }
    callHome();
  }, []);

  return (
    <div className="main-flex-container">
      <Nav />
      <Home home={home} />
      <Footer />
    </div>
  );
}

export default HomePage;
