import React, { useState } from "react";
import "./MessageForm.css";

function MessageForm(props) {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const createdChat = { text, from };
    fetch("https://malkit-chat-server.glitch.me/messages/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(createdChat) })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.setChats(data);
        setText("");
        setFrom("");
      });
  }

  return (
    <div className="form-container">
      <form className="chat-form" onSubmit={handleSubmit}>
        <div>
          <label className="chat-label">Your Message</label>
        </div>
        <div>
          <textarea className="chat-text-area" type="text" required value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label className="chat-label">Your Name</label>
        </div>
        <div>
          <input className="chat-from-input" type="text" required value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="add-chat-btn-container">
          <button className="add-chat-btn">Add Chat</button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
