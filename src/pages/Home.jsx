import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
// import Register from "../components/registerform/Register";
import "./Home.css";
import Otp from "./Otp";
import Register from "../components/registerform/Register";
import VotingPage from "./VotingPage";

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavigationBar />
      </div>
      <div>
        {/* <Otp /> */}
        {/* <Register /> */}
        <VotingPage />
      </div>
    </div>
  );
};

export default Home;
