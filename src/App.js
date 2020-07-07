import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import FormMessages from "./components/FormMessages";
import { fetchFromServer } from "./utils/function";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState({
    from: "",
    text: ""
  });
  const [messageEditId, setMessageEditId] = useState("");
  const [newEditText, setNewEditText] = useState("");
  const [showEditDiv, setShowEditDiv] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.value === "") {
      alert("Please complete all the fields");
    }
    fetchFromServer(
      "https://cyf-chat-server-express.herokuapp.com/messages",
      newMessage,
      "POST"
    );
  };

  const handleOnChange = e => {
    const newMessageFromReact = {
      ...newMessage,
      [e.target.name]: e.target.value
    };
    setNewMessages(newMessageFromReact);
  };
  const editButton = e => {
    const messId = e.target.value;
    setMessageEditId(Number(messId));
    setShowEditDiv(!showEditDiv);
  };
  const handleEditText = e => {
    const updMessage = messages.find(mess => mess.id === messageEditId);
    const newMessageEdit = { ...updMessage, [e.target.name]: e.target.value };
    setNewEditText(newMessageEdit);
  };
  const handleSubmitEdit = e => {
    e.preventDefault();
    fetchFromServer(
      `https://cyf-chat-server-express.herokuapp.com/update/${messageEditId}`,
      newEditText,
      "PUT"
    );
    setShowEditDiv(!showEditDiv);
  };
  const handleDelete = e => {
    const deleteId = e.target.value;
    fetchFromServer(
      `https://cyf-chat-server-express.herokuapp.com/messages/${deleteId}`,
      {},
      "DELETE"
    );
  };

  useEffect(() => {
    fetch("https://cyf-chat-server-express.herokuapp.com/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
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
            showEditDiv={showEditDiv}
            messageEditId={messageEditId}
            handleDelete={handleDelete}
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
