import React, { useState } from "react";

function CreateMessageForm({ onMessageCreated }) {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      from: from,
      text: text,
    };

    fetch("https://delnia-alipour-chat-server.glitch.me/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        onMessageCreated(data);
        setFrom("");
        setText("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          From
          <input
            type="text"
            value={from}
            onChange={handleFromChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateMessageForm;
