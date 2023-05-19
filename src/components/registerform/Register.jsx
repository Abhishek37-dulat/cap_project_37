import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="register"></div>
      <div className="register1">
        <div className="reg-title">
          <p>Register Now</p>
        </div>
        <div className="reg-email">
          <div className="email-title">
            <p>Enter Your Email Address</p>
          </div>
          <div className="email-input">
            <input type="email" placeholder="Please enter your email id..." />
          </div>
        </div>
        <div className="reg-password">
          <div className="password-title">
            <p>Create Your Password</p>
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Please enter your password..."
            />
          </div>
        </div>
        <div className="reg-con-password">
          <div className="con-password-title">
            <p>Confirm Your Password</p>
          </div>
          <div className="con-password-input">
            <input
              type="password"
              placeholder="Please confirm your password..."
            />
          </div>
        </div>
        <div className="reg-button">
          <div className="but-reg">
            <button>Register</button>
          </div>
          <div className="but-a">
            <p>Already have an account?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
