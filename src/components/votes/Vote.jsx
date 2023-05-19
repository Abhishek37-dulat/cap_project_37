import React from "react";
import "./Vote.css";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.png";
import b3 from "../../images/b3.png";
// import b4 from "../../images/b4.png";
// import HowToVoteIcon from "@mui/icons-material/HowToVote";
import vote from "../../images/vote.jpg";
import CandidateBox from "../candidateBox/CandidateBox";
import Footer from "../footer/Footer";
import Help from "../help/Help";
import Chatbot from "../Chat/Chat";
import { useState } from "react";

const Vote = () => {
  const [openHelp, setOpenHelp] = useState(false);
  const handlehelp = () => {
    setOpenHelp(!openHelp);
  };
  return (
    <>
      <div className="votes">
        <div className="vote-title">
          <p>2024 NATIONAL ELECTION</p>
        </div>
        <div>
          <CandidateBox />
          <CandidateBox />
          <CandidateBox />
          <CandidateBox />
          <CandidateBox />
          <CandidateBox />
        </div>
        <div className="vote-button">
          <button className="v-b-1">Preview</button>
          <button className="v-b-2">Submit</button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div className="help-box" onClick={() => handlehelp()}>
        <p>?</p>
      </div>
      {openHelp && (
        <div className="help-box-message-space">
          <Chatbot />
        </div>
      )}
      <Help />
    </>
  );
};

export default Vote;
