import React from "react";
import UserCandidate from "../users/UserCandidate";

const CandidateBox = () => {
  return (
    <div className="vote-box1">
      <div className="box1-type">
        <p>Prime Minister</p>
      </div>
      <div className="box1-reset">
        <div className="reset-left">
          <p>Select Only One Candidate</p>
        </div>
        <div className="reset-right">
          <button>reset</button>
        </div>
      </div>
      <div className="box1-candidate">
        <form action="">
          <UserCandidate />
          <UserCandidate />
          <UserCandidate />
        </form>
      </div>
    </div>
  );
};

export default CandidateBox;
