import React, { Component } from "react";
import Button from "./Button.js";

export default class Message extends Component {
  render() {
    return (
      <ul style={{ padding: "0" }}>
        {this.props.messages.map((msg, i) => {
          return (
            <div
              className="message"
              style={{ background: i % 2 === 0 ? "#dedede" : "#ffeafe" }}
            >
              <li style={{ listStyle: "none" }} key={msg.id}>
                <span style={fromStyle}>{msg.from} :</span> {msg.text}
              </li>
              <div style={{ width: "40px" }}>
                <a href="#update-form">
                  <Button
                    onClick={this.props.editMessage.bind(this, msg)}
                    style={btnStyle}
                    content="Edit"
                  />
                </a>{" "}
                <Button
                  onClick={this.props.delMessage.bind(this, msg.id)}
                  style={btnStyle}
                  content="X"
                />
              </div>
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
  margin: "1px auto",
  borderRadius: "5px",
  cursor: "pointer"
};
