import React from "react";
import "./Message.css";

function Message(props) {
  function handleDelete() {
    props.setDeleteRow(props.chat.id);
  }
  return (
    <div className="message-row">
      <div className="message-text-container">{props.chat.text}</div>
      <div className="message-text-container">{props.chat.from}</div>
      <div className="delete-btn-container">
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Message;
