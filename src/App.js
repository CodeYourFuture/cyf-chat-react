import React from "react";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";
import Compose from "./Compose";
import moment from "moment";
import openSocket from "socket.io-client";
import "./App.css";
const socket = openSocket("https://elamin-chat-server.glitch.me");

class App extends React.Component {
  state = { messages: [], messageToSend: "" };
  componentDidMount() {
    this.person = prompt("Please enter your name", "Harry Potter");
    this.getAllMessages();
  }

  updateMessages = messages => {
    this.setState({ messages: messages });
  };
  //Getting All the messages
  getAllMessages = () => {
    fetch("https://elamin-chat-server.glitch.me/messages")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
  };

  //adding a message
  postMessage = (data = {}) => {
    const url = "https://elamin-chat-server.glitch.me/messages";
    // Default options are marked with *
    fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
      mode: "cors",

      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        // this.getAllMessages();
        //sending a message to the server when someone post
        socket.emit("chat", {
          message: "hi"
        });
      });
  };

  deleteMessage = messageId => {
    const url = `https://elamin-chat-server.glitch.me/messages/${messageId}`;
    // Default options are marked with *
    fetch(url, {
      method: "delete",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        this.setState({ messages: res });
      });
  };

  //this executes when the send message button clicked
  submitMessage = message => {
    console.log(message);
    this.postMessage({
      text: message,
      from: this.person
    });
  };

  //handle the sokect.io
  handleSocket = () => {
    const socket = openSocket("https://elamin-chat-server.glitch.me");
    socket.emit("chat", {
      message: "hi"
    });
    socket.on("chat", data => {
      console.log(data);
      this.setState({ messages: data });
    });
  };

  render() {
    //listening for the server messages
    socket.on("chat", data => {
      console.log(data);
      this.setState({ messages: data });
    });
    return (
      <div>
        {this.state.messages.map(message => {
          const messageTime = moment(message.timeSent).format("h:mm a");
          if (this.person == message.from) {
            return (
              <MessageSent
                key={message.id}
                deleteMessage={this.deleteMessage}
                from={message.from}
                text={message.text}
                messageTime={messageTime}
                messageID={message.id}
              />
            );
          } else {
            return (
              <MessageRecieved
                key={message.id}
                deleteMessage={this.deleteMessage}
                from={message.from}
                text={message.text}
                messageTime={messageTime}
              />
            );
          }
        })}

        <Compose submitMessage={this.submitMessage} />
      </div>
    );
  }
}

export default App;
