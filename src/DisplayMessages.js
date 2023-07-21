import React, { useEffect, useState } from "react";
import DeleteMessageButton from "./DeleteMessageButton";
import CreateMessageForm from "./CreateMessageForm";

function DisplayMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://delnia-alipour-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleDeleteMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  const handleCreateMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  return (
    <div>
      <h2>Latest messages</h2>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              {message.from}: {message.text}
              <DeleteMessageButton
                messageId={message.id}
                onDelete={handleDeleteMessage}
              />
            </li>
          );
        })}
      </ul>
      <CreateMessageForm onMessageCreated={handleCreateMessage} />
    </div>
  );
}

export default DisplayMessages;
