import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import "./Home.css";
import Register from "../components/registerform/Register";
import Login from "../components/registerform/Login";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavigationBar />
      </div>
      <div className="home_ll">
        <Register />
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default Home;
