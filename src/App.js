import React, { Component } from "react";
import "./App.css";
import Message from "./Components/Message.js";
import SendMessage from "./Components/SendMessage.js";
import Search from "./Components/Search.js";
import Button from "./Components/Button.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      error: false,
      errorMsg: "",
      noResults: false,
      isLoading: true
    };
  }
  componentDidMount() {
    this.autoupdate = setInterval(this.handleLatest, 500);
  }

  displayMessages = () => {
    fetch("https://kadir-chat-server.glitch.me/messages")
      .then(res => res.json())
      .then(json => {
        clearInterval(this.autoupdate);
        this.setState({
          isLoading: false,
          noResults: false,
          error: false,
          messages: json
        });
      });
  };

  handleLatest = () => {
    fetch("https://kadir-chat-server.glitch.me/messages/latest")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          noResults: false,
          error: false,
          messages: json
        });
      });
  };

  deleteMessage = id => {
    fetch(`https://kadir-chat-server.glitch.me/messages/${id}`, {
      method: "DELETE"
    });
    this.handleLatest();
  };

  search = keyWord => {
    fetch(`https://kadir-chat-server.glitch.me/messages/search?text=${keyWord}`)
      .then(res => {
        if (res.status === 400) {
          this.setState({ error: true });
        }
        return res;
      })
      .then(res => res.json())
      .then(json => {
        json.msg
          ? this.setState({
              isLoading: false,
              noResults: false,
              error: true,
              errorMsg: "Please type a keyword to search"
            })
          : json.length > 0
          ? this.setState({
              isLoading: false,
              noResults: false,
              error: false,
              messages: json
            })
          : this.setState({ isLoading: false, noResults: true });
      });
    clearInterval(this.autoupdate);
  };

  sendMessage = reqBody => {
    const reqParams = {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(reqBody)
    };
    fetch(`https://kadir-chat-server.glitch.me/messages`, reqParams);
    this.handleLatest();
  };

  render() {
    const { isLoading, noResults, error, messages, errorMsg } = this.state;
    return (
      <div
        style={{
          width: "90%",
          margin: "0 auto"
        }}
      >
        <h1 style={h1style}>CYF Chat</h1>
        <div style={divStyle}>
          <Button onClick={this.handleLatest} content="Latest messages" />
          <Button onClick={this.displayMessages} content="All messages" />
        </div>
        <Search search={this.search} />
        <div>
          {error && <p style={paraStyle}>{errorMsg}</p>}
          {noResults && <p style={paraStyle}>No results found</p>}
          {!isLoading ? (
            <Message messages={messages} delMessage={this.deleteMessage} />
          ) : (
            "is Loading ...."
          )}
        </div>
        <SendMessage sendMessage={this.sendMessage} />
      </div>
    );
  }
}

const h1style = {
  textAlign: "center",
  borderBottom: "1px solid black"
};

const divStyle = { display: "flex", justifyContent: "space-between" };

const paraStyle = {
  border: "2px solid red",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
  textAlign: "center"
};
