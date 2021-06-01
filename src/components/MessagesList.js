import React, { useEffect, useState } from "react";
import MessageCard from "./MessageCard";

function MessagesList() {
  const [messages, setMessages] = useState([]);

  function fetchMessages() {
    const url = "http://localhost:5000/messages";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="border m-3 p-3 col-6">
      {messages.map((message, index) => (
        <MessageCard
          key={message.id}
          from={message.from}
          text={message.text}
          time={messages.timeSent}
        />
      ))}
    </div>
  );
}

export default MessagesList;
