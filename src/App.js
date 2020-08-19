import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import FormMessages from "./components/FormMessages";
import { fetchFromServer } from "./utils/function";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState({
    from: "",
    text: "",
  });
  const [messageEditId, setMessageEditId] = useState("");
  const [newEditText, setNewEditText] = useState("");
  const [showEditDiv, setShowEditDiv] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.from === "" || newMessage.text === "") {
      alert("Please complete all the fields");
    }
    fetchFromServer(
      "https://cyf-chat-server-express.herokuapp.com/messages",
      newMessage,
      "POST"
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
    setMessageEditId(messId);
    setShowEditDiv(!showEditDiv);
  };
  const handleEditText = (e) => {
    const updMessage = messages.find((mess) => mess._id === messageEditId);
    const newMessageEdit = { ...updMessage, [e.target.name]: e.target.value };
    setNewEditText(newMessageEdit);
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    fetchFromServer(
      `https://cyf-chat-server-express.herokuapp.com/message/update/${messageEditId}`,
      newEditText,
      "PUT"
    );
    setShowEditDiv(!showEditDiv);
  };
  const handleDelete = (e) => {
    const deleteId = e.target.value;
    fetchFromServer(
      `https://cyf-chat-server-express.herokuapp.com/messages/${deleteId}`,
      {},
      "DELETE"
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://cyf-chat-server-express.herokuapp.com/"
        );
        const messages = await res.json();
        setMessages(messages);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    let repeat = setTimeout(() => {
      fetchData();
    }, 10000);
    return () => {
      clearTimeout(repeat);
    };
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
