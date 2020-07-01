import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://cyf-chat-server-express.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {messages.map((mess) => (
            <div className="message">
              <h3>{mess.from}</h3>
              <p>{mess.text}</p>
            </div>
          ))}
        </div>
      </header>
      <form>
        <input type="text"></input>
        <input type="text"></input>
      </form>
    </div>
  );
}

export default App;
