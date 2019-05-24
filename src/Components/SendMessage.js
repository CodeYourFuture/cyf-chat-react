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
  };

  render() {
    return (
      <div style={divStyle}>
        <h2 style={{ margin: "0" }}>Send a message</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <p style={paraStyle}>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="from"
                placeholder="Your Name"
              />
            </div>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="The message..."
              />
            </div>
          </p>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const divStyle = {
  display: `flex`,
  flexDirection: "column",
  alignItems: "center",
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
