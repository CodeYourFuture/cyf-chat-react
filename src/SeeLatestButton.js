import React, { useState } from "react";

function SeeLatestButton() {
  const [messages, setMessages] = useState([]);

  const fetchLatestMessages = () => {
    fetch("https://delnia-alipour-chat-server.glitch.me/messages/latest")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  };

  return (
    <div>
      <h2>See Latest Messages</h2>
      <button onClick={fetchLatestMessages}>See Latest</button>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.from}: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeeLatestButton;
