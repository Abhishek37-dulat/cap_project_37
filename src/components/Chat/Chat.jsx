import React from "react";
import "./Chat.css";
import scroo from "../../images/scroo.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-left">
        <img src={scroo} alt="scroo" />
      </div>
      <div className="chat-right">
        <div className="big-box">
          <div className="box-top">
            <div className="message-box">
              <p>Hello How can I help You !</p>
            </div>
            <div className="message-box">
              <p>Hello How can I help You !</p>
            </div>
            <div className="message-box">
              <p>Hello How can I help You !</p>
            </div>
          </div>
          <div className="box-lower"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
