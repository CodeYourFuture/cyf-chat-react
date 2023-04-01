import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [messages, setMessages] = useState([]);
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

  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const newMessage = {
  //     id: idCount + 1,
  //     from: inputName,
  //     text: inputText,
  //   };
  //   messages.push(newMessage);
  //   setInputName("");
  //   setInputText("");
  //   idCount = idCount + 1;
  // }
  function handleFormSubmit(e) {
    e.preventDefault();
    const newMessage = {
      from: inputName,
      text: inputText,
    };
    fetch("https://lorena-chat-server.glitch.me/messages", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setInputName("");
    setInputText("");
  }

  function deleteMessage(id) {
    console.log("id", id);
  }
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
          <li key={el.id} className="message">
            <p>
              <strong>{el.from}</strong>
            </p>
            <div className="messageFunctionality">
              <p className="textMessage">{el.text}</p>
              <i class="fa fa-edit"></i>
              <i class="fa fa-trash" onClick={(el) => deleteMessage(el.id)}></i>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
