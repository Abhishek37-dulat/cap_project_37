import React from "react";
import "./Vote.css";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.png";
import b3 from "../../images/b3.png";
import b4 from "../../images/b4.png";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import vote from "../../images/vote.jpg";

const Vote = () => {
  return (
    <div className="votes">
      <div className="votes-timer">
        <p>Timer: 04:59 mins</p>
      </div>
      <div className="votes-parties">
        <div className="about-vote">
          <div className="parties-logo">
            <img src={b1} alt="b1" />
          </div>
          <div className="parties-Title">
            <p>Bharatiya Janata Party</p>
          </div>
          <div className="parties-vote">
            <div>
              <img src={vote} alt="vote" />
            </div>
          </div>
        </div>
        <div className="about-vote">
          <div className="parties-logo">
            <img src={b2} alt="b2" />
          </div>
          <div className="parties-Title">
            <p>Indian National Congress</p>
          </div>
          <div className="parties-vote">
            <div>
              <img src={vote} alt="vote" />
            </div>
          </div>
        </div>
        <div className="about-vote">
          <div className="parties-logo">
            <img src={b3} alt="b3" />
          </div>
          <div className="parties-Title">
            <p>Aam Aadmi Party</p>
          </div>
          <div className="parties-vote">
            <div>
              <img src={vote} alt="vote" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
