import React from "react";

const SendMessage = (props) => {
  return (
    <form onSubmit={props.newMessage}>
      Name:{" "}
      <input
        placeholder="Your name"
        type="text"
        name="from"
        onChange={(event) => {
          props.setFrom(event.target.value);
        }}
      ></input>
      message:{" "}
      <input
        placeholder="The message"
        type="text"
        name="text"
        onChange={(event) => {
          props.setText(event.target.value);
        }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SendMessage;
