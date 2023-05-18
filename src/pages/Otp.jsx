import React from "react";
import "./Otp.css";

const Otp = () => {
  return (
    <>
      <div className="register"></div>
      <div className="register1">
        <div className="part1">
          <div className="part1-parts">
            <div>
              <p>OTP Verification</p>
            </div>
            <div>
              <p>Timer: 01:59</p>
            </div>
          </div>
        </div>
        <div className="part3">
          <div className="title-email">
            <p>Enter OTP</p>
          </div>
          <div className="box-email">
            <div className="box-second-e">
              <input placeholder="eg. 78658" />
            </div>
          </div>
        </div>
        <div className="part4">
          <button>Verify</button>
        </div>
      </div>
    </>
  );
};

export default Otp;
