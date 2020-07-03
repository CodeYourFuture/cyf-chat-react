import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import FormMessages from "./components/FormMessages";
import { postMessage } from "./utils/function";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState({
    from: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postMessage(
      "https://cyf-chat-server-express.herokuapp.com/messages",
      newMessage
    );
  };
  const handleOnChange = (e) => {
    const newMessageFromReact = {
      ...newMessage,
      [e.target.name]: e.target.value,
    };
    setNewMessages(newMessageFromReact);
  };
  useEffect(() => {
    fetch("https://cyf-chat-server-express.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Messages messages={messages} />
        </div>
      </header>
      <FormMessages
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default App;
