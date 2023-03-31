import React, { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://lorena-chat-server.glitch.me/messages")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status code ${res.status}`);

        return res.json();
      })
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        setError("Error");
      });
  }, []);
  console.log(error);

  return (
    <div className="messagesContainer">
      <div className="message">
        <p>
          <strong>Lorena</strong>
        </p>
        <div className="messageFunctionality">
          <p className="textMessage">Welcome to my chat server</p>
          <i class="far fa-edit"></i>
          <i class="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
}
