import React from "react";
import "./VotingPage.css";
import NavigationBar from "../components/Navigation/NavigationBar";
import Vote from "../components/votes/Vote";
import Footer from "../components/footer/Footer";

const VotingPage = () => {
  return (
    <div className="vote">
      <NavigationBar />
      <Vote />
    </div>
  );
};

export default VotingPage;
