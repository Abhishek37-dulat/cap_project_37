import "materialize-css/dist/css/materialize.min.css";
import React, { Component } from "react";
import axios from "axios";
import Message from "./Message";

class Chatbot extends Component {
  messagesEnd;
  constructor(props) {
    super(props);
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.state = {
      messages: [],
      showBot: true,
    };
  }
  async df_text_query(queryText) {
    let says = {
      speaks: "user",
      msg: {
        text: {
          text: queryText,
        },
      },
    };
    this.setState({ messages: [...this.state.messages, says] });
    const res = await axios.post("/api/df_text_query", { text: queryText });

    for (let msg of res.data.fulfillmentMessages) {
      says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  async df_event_query(eventName) {
    const res = await axios.post("/api/df_event_query", { event: eventName });

    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        msg: msg,
      };

      this.setState({ messages: [...this.state.messages, says] });
    }
  }
  // componentDidMount() {
  //   this.df_event_query("Welcome");
  // }
  // componentDidUpdate() {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  //   if (this.talkInput) {
  //     this.talkInput.focus();
  //   }
  // }

  show(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ showBot: true });
  }

  hide(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ showBot: false });
  }

  renderMessages(returnedMessages) {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return (
          <Message
            key={i}
            speaks={message.speaks}
            text={message.msg.text.text}
          />
        );
      });
    } else {
      return null;
    }
  }
  _handleInputKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    if (this.state.showBot) {
      return (
        <div
          style={{
            minHeight: 300,
            maxHeight: 300,
            width: 300,
            position: "absolute",
            bottom: 0,
            right: 0,
            border: "none",
            backgroundColor: "#232d31",
            borderRadius: "10px 10px 0px 0px",
            top: "0px",
            opacity: "0.6",
          }}
        >
          <div
            id="chatbot"
            style={{
              minHeight: 355,
              maxHeight: 355,
              width: "100%",
              overflow: "auto",
              backgroundColor: "#232d31",
              borderRadius: "10px 10px 0px 0px",
              opacity: "0.6",
            }}
          >
            {this.renderMessages(this.state.messages)}
            <div
              ref={(el) => {
                this.messagesEnd = el;
              }}
              style={{ float: "left", clear: "both" }}
            ></div>
          </div>
          <div className=" col s12">
            <input
              style={{
                margin: 0,
                paddingLeft: "1%",
                paddingRight: "1%",
                width: "98%",
                backgroundColor: "#232d31",
                borderRadius: "0px 0px 10px 10px",
              }}
              ref={(input) => {
                this.talkInput = input;
              }}
              placeholder="type a message:"
              onKeyPress={this._handleInputKeyPress}
              id="user_says"
              type="text"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            minHeight: 40,
            maxHeight: 400,
            width: 400,
            position: "absolute",
            bottom: 0,
            right: 0,
            border: "1px solid lightgray",
            backgroundColor: "#232d31",
          }}
        >
          <div
            ref={(el) => {
              this.messagesEnd = el;
            }}
            style={{ float: "left", clear: "both" }}
          ></div>
        </div>
      );
    }
  }
}

export default Chatbot;
