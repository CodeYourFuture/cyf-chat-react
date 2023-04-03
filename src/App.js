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
        setError("Error", error);
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

  function deleteMessage(el) {
    fetch(`https://lorena-chat-server.glitch.me/messages/:${el.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
        console.log("Success deleted:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const [isEditing, setIsEditing] = useState(false);
  const [inputEdit, setInputEdit] = useState("");

  function handleEdit(e) {
    e.preventDefault();
    setInputEdit(e.target.value);
  }

  function editMessage(el) {
    console.log("success from edit", el.id);
    let updateMessage = {
      id: el.id,
      from: el.from,
      text: inputEdit,
    };
    fetch(`https://lorena-chat-server.glitch.me/messages/:${el.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: edit", data);
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("EDIT id", el.id);
    setIsEditing(false);
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
              <i
                class="fa fa-edit"
                onClick={() => {
                  setIsEditing(true);
                }}
              ></i>
              {!isEditing ? null : (
                <>
                  <input type="text" value={inputEdit} onChange={handleEdit} />
                  <button onClick={() => editMessage(el)}>Save</button>
                </>
              )}
              <i class="fa fa-trash" onClick={() => deleteMessage(el)}></i>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
