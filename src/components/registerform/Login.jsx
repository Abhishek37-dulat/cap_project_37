import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login"></div>
      <div className="login1">
        <div className="log-title">
          <p>Login Now</p>
        </div>
        <div className="log-id">
          <div className="id-title">
            <p>Enter Your Voter Id</p>
          </div>
          <div className="id-input">
            <input type="text" placeholder="Please enter your voter id..." />
          </div>
        </div>
        <div className="log-password">
          <div className="password-title">
            <p>Enter Your Password</p>
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Please enter your password..."
            />
          </div>
        </div>
        <div className="log-button">
          <div className="but-log">
            <button>Login</button>
          </div>
          <div className="but-a">
            <p>Don't have an account?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
