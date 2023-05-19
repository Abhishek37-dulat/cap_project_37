import React from "react";
import "./UserCandidate.css";
import b1 from "../../images/b1.png";
import mm from "../../images/mm.jpg";
// import rr from "../../images/rrr.jpg";

const UserCandidate = () => {
  return (
    <div className="usercandidate">
      <div className="user-ra">
        <input type="radio" value="1" />
      </div>
      <div className="user-sig">
        <img src={b1} alt="b1" />
      </div>
      <div className="user-img">
        <img src={mm} alt="mm" />
      </div>
      <div className="user-name">
        <p>Narendra Modi</p>
      </div>
    </div>
  );
};

export default UserCandidate;
