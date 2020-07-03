import React, { Component } from "react";
import "./App.css";
import Message from "./Components/Message.js";
import DisplayMessageById from "./Components/DisplayMessageById.js";
import SendMessage from "./Components/SendMessage.js";
import UpdateMessage from "./Components/UpdateMessage.js";
import Search from "./Components/Search.js";
import Button from "./Components/Button.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      infoMsg: null,
      isLoading: true,
      editMsg: false
    };
  }
  componentDidMount() {
    this.autoUpdate = setInterval(this.handleLatest, 500);
  }
  componentWillUnmount() {
    console.log("byeee");
  }
  displayMessages = () => {
    fetch("https://kadir-chat-server.glitch.me/messages")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          infoMsg: null,
          messages: json
        });
      });
    clearInterval(this.autoUpdate);
  };

  handleLatest = () => {
    fetch("https://kadir-chat-server.glitch.me/messages/latest")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          infoMsg: null,
          messages: json
        });
      });
  };

  displayMessageById = id => {
    fetch(`https://kadir-chat-server.glitch.me/messages/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          infoMsg: null,
          messages: json
        });
      });
    clearInterval(this.autoUpdate);
  };

  deleteMessage = id => {
    fetch(`https://kadir-chat-server.glitch.me/messages/${id}`, {
      method: "DELETE"
    }).then(res => {
      if (res.status !== 400) {
        this.setState({
          infoMsg: "Selected message has been deleted!",
          messages: this.state.messages.filter(msg => msg.id != id)
        });
      }
    });
  };

  search = keyWord => {
    fetch(`https://kadir-chat-server.glitch.me/messages/search?text=${keyWord}`)
      .then(res => {
        if (res.status === 400) {
          this.setState({ infoMsg: true });
        }
        return res;
      })
      .then(res => res.json())
      .then(json => {
        json.msg
          ? this.setState({
              isLoading: false,
              infoMsg: "Please type a keyword to search"
            })
          : json.length > 0
          ? this.setState({
              isLoading: false,
              infoMsg: null,
              messages: json
            })
          : this.setState({ isLoading: false, infoMsg: "No results found" });
      });
    clearInterval(this.autoUpdate);
  };

  sendMessage = reqBody => {
    const reqParams = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(reqBody)
    };
    fetch(`https://kadir-chat-server.glitch.me/messages`, reqParams);
    this.autoUpdate = setInterval(this.handleLatest, 500);
  };

  editMessage = msg => {
    this.setState({ editMsg: msg });
  };

  updateMessage = updatedMsg => {
    const reqParams = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify(updatedMsg)
    };
    const id = this.state.editMsg.id;
    fetch(`https://kadir-chat-server.glitch.me/messages/${id}`, reqParams)
      .then(res => res.json())
      .then(json => {
        this.setState({
          messages: [json.message],
          infoMsg: json.msg,
          editMsg: false
        });
      });
    clearInterval(this.autoUpdate);
  };

  render() {
    const { isLoading, infoMsg, messages, editMsg } = this.state;
    return (
      <div
        style={{
          maxWidth: "768px",
          border: "1px solid black",
          borderRadius: "5px",
          margin: "10px auto",
          padding: "3px"
        }}
      >
        <div
          style={{
            width: "95%",
            margin: "0 auto"
          }}
        >
          <h1 style={h1style}>CYF Chat</h1>
          <div style={divStyle}>
            <Button
              style={{ cursor: "pointer", background: "#fab95b" }}
              onClick={this.handleLatest}
              content="Latest messages"
            />
            <DisplayMessageById displayMessageById={this.displayMessageById} />
            <Button
              style={{ cursor: "pointer", background: "#fab95b" }}
              onClick={this.displayMessages}
              content="All messages"
            />
          </div>
          <Search search={this.search} />
          <div>
            {infoMsg && <p style={paraStyle}>{infoMsg}</p>}
            {!isLoading ? (
              <Message
                messages={messages}
                editMessage={this.editMessage}
                delMessage={this.deleteMessage}
              />
            ) : (
              "is Loading ...."
            )}
          </div>

          {editMsg ? (
            <UpdateMessage
              msgToUpdate={editMsg}
              updateMessage={this.updateMessage}
            />
          ) : (
            <SendMessage sendMessage={this.sendMessage} />
          )}
        </div>
      </div>
    );
  }
}

const h1style = {
  textAlign: "center",
  color: "white",
  padding: "5px 0",
  margin: "10px auto",
  backgroundColor: "#38598b",
  border: "1px solid black",
  borderRadius: "5px"
};

const divStyle = { display: "flex", justifyContent: "space-between" };

const paraStyle = {
  border: "2px solid #553c8b",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
  textAlign: "center"
};
