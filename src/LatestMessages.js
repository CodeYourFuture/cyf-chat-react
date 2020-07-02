import React, { useState, useEffect } from "react";

const LatestMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function fetchMessages() {
      fetch(`http://localhost:3001/messages`)
        .then((res) => res.json())
        .then((data) => setMessages(data));
    }
    fetchMessages();
    setInterval(fetchMessages, 30000000);
  }, []);

  function handleClick() {
    fetch(`http://localhost:3001/messages/latest`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }
  function handleDelete(id) {
    fetch(`http://localhost:3001/messages/  `, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }
  return (
    <div>
      <button onClick={handleClick}>See Latest !</button>
      {messages.map((message) => (
        <div>
          <p>{message.text}</p>
          <p>{message.from}</p>
          <button onClick={() => handleDelete(message.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default LatestMessages;
