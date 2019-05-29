import React, { Component } from "react";

export default class SendMessage extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      text: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state);
    this.setState({ from: "", text: "" });
  };

  render() {
    return (
      <div style={divStyle}>
        <h2 style={{ margin: "0", color: "white" }}>Send a message</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <div style={paraStyle}>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="from"
                value={this.state.from}
                placeholder="Your Name"
              />
            </div>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="text"
                value={this.state.text}
                placeholder="The message..."
              />
            </div>
          </div>
          <button
            style={{
              cursor: "pointer",
              background: "#fab95b",
              padding: "5px"
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

const divStyle = {
  display: `flex`,
  flexDirection: "column",
  alignItems: "center",
  background: "#38598b",
  margin: "10px 0",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px 0"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const paraStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const padding = { padding: "5px" };
