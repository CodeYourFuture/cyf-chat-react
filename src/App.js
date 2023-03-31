import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  //const [newMessage, setNewMessage] = useState("");

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

  let [inputName, setInputName] = useState("");
  let [inputText, setInputText] = useState("");

  function handleNameInput(e) {
    e.preventDefault();
    setInputName(e.target.value);
  }

  function handleNameText(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  function handleFormSubmit(e) {
    console.log("Name:" + inputName);
    console.log("Text" + inputText);
    e.preventDefault();

    const newMessage = { from: inputName, text: inputText };
    messages.push(newMessage);
    setInputName("");
    setInputText("");
  }

  console.log(messages);

  return (
    <div className="App">
      <h1>LORENA'S CHAT SERVER</h1>
      <form className="inputContainer" onSubmit={handleFormSubmit}>
        <label>
          <strong>Name:</strong>
          <input
            id="inputName"
            type="text"
            value={inputName}
            onChange={handleNameInput}
          />
        </label>
        <label>
          <strong>Your message:</strong>
          <input
            id="inputMessage"
            type="text"
            value={inputText}
            onChange={handleNameText}
          />
        </label>
        <input id="submitBtn" type="submit" />
      </form>
      <div className="messagesContainer">
        {messages.map((el) => (
          <div className="message">
            <p>
              <strong>{el.from}</strong>
            </p>
            <div className="messageFunctionality">
              <p className="textMessage">{el.text}</p>
              <i class="fa fa-edit"></i>
              <i class="fa fa-trash"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
