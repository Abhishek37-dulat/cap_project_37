import React from "react";
import "./Chatbot.css";
import NavigationBar from "../components/Navigation/NavigationBar";
import Chat from "../components/Chat/Chat";

const Chatbot = () => {
  return (
    <div className="chatbot">
      <NavigationBar />
      <Chat />
    </div>
  );
};

export default Chatbot;
