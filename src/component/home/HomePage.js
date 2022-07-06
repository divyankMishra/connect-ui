import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import Home from "./Home";
import { useState } from "react";
import { homepage } from "../service/HomePage";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [home, sethome] = useState({ user: {}, posts: [] });
  const [load, setload] = useState(false);
  let navigate = useNavigate();
  if (!load) {
    homepage()
      .then((data) => {
        if (data.error) {
          navigate("/login");
        } else sethome(data.body);
      })
      .catch((err) => console.log(err));
    setload(true);
  }
  return (
    <div className="main-flex-container">
      <Nav />
      <Home home={home} />
      <Footer />
    </div>
  );
}

export default HomePage;
