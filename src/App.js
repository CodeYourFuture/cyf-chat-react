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
  const [messageEditId, setMessageEditId] = useState("");
  const [newEditText, setNewEditText] = useState("");

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
  const editButton = (e) => {
    const messId = e.target.value;
    setMessageEditId(Number(messId));
    console.log(messId);
  };
  const handleEditText = (e) => {
    const updMessage = messages.find((mess) => mess.id === messageEditId);
    const newMessageEdit = { ...updMessage, [e.target.name]: e.target.value };
    setNewEditText(newMessageEdit);
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const index = messages.indexOf(newEditText);
    messages.splice(index, 1, newEditText);
    console.log(newEditText);
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
          <Messages
            messages={messages}
            handleSubmitEdit={handleSubmitEdit}
            editButton={editButton}
            handleEditText={handleEditText}
          />
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
