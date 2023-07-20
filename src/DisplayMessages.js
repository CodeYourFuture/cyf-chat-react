import React, { useEffect, useState } from "react";

function DisplayMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://delnia-alipour-chat-server.glitch.me/messages/latest")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h2>Latest messages</h2>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              {message.from}: {message.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayMessages;
