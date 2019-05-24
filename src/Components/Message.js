import React, { Component } from "react";
import Button from "./Button.js";

export default class Message extends Component {
  render() {
    return (
      <ul style={{ padding: "0" }}>
        {this.props.messages.map(msg => {
          return (
            <div
              className="message"
              style={{ background: msg.id % 2 === 0 ? "lightblue" : "white" }}
            >
              <li style={{ listStyle: "none" }} key={msg.id}>
                <span style={fromStyle}>{msg.from} :</span> {msg.text}
              </li>
              <Button
                onClick={this.props.delMessage.bind(this, msg.id)}
                style={btnStyle}
                content="X"
              />
            </div>
          );
        })}
      </ul>
    );
  }
}

const fromStyle = {
  display: "block",
  fontWeight: "bold",
  fontStyle: "italic"
};

const btnStyle = {
  background: "#ff0000",
  maxHeight: "25px",
  color: "white",
  border: "none",
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer"
};
