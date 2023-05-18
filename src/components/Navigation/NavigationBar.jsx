import React from "react";
import "./NavigationBar.css";
import logo from "../../images/logo.png";

const NavigationBar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-img">
          <img width="100px" height="100px" src={logo} alt="logo" />
        </div>
      </div>
      <div className="nav-mid">
        <p>Voting Management System</p>
      </div>
      <div className="nav-right">
        <div className="nav-buttons">
          <div className="nav-but-left">
            <button>SignIn</button>
          </div>
          <div className="nav-but-right">
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
