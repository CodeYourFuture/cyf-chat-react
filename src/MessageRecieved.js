import React from "react";
import "./App.css";

const MessageRecieved = props => {
  return (
    <div class="message received">
      {props.from} <br />
      {props.text}
      <span class="metadata">
        <span onClick={props.deleteMessage} class="time" />
        {props.messageTime}
      </span>
    </div>
  );
};

export default MessageRecieved;
