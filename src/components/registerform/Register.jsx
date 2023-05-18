import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="register"></div>
      <div className="register1">
        <div className="part1">
          <p>REGISTER NOW</p>
        </div>
        <div className="part2">
          <div className="title-numer">
            <p>Enter Your Phone Number</p>
          </div>
          <div className="box-number">
            <div className="box-first">
              <p>+91</p>
            </div>
            <div className="box-second">
              <input placeholder="eg.9518118356" />
            </div>
          </div>
        </div>
        <div className="part3">
          <div className="title-email">
            <p>Enter Your Email Id</p>
          </div>
          <div className="box-email">
            <div className="box-second-e">
              <input placeholder="eg. abc@gmail.com" />
            </div>
          </div>
        </div>
        <div className="part4">
          <button>Send OTP</button>
        </div>
      </div>
    </>
  );
};

export default Register;
