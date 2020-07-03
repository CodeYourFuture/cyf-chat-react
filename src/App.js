import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState({
    from: "",
    text: "",
  });

  function postMessage(url, data) {
    const response = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => console.log("Message Send!"));
    return response;
  }
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
          {messages.map((mess) => (
            <div key={mess.id}>
              <h5>{mess.from}</h5>
              <div className="message">
                <p>{mess.text}</p>
              </div>
              <div className="tooltip">
                {moment(mess.timeSent).fromNow()}
                <span className="tooltipText">{mess.timeSent}</span>
              </div>
              <span></span>
            </div>
          ))}
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleOnChange}
          name="from"
        ></input>
        <textarea
          type="text"
          placeholder="Enter message here..."
          rows="6"
          cols="50"
          onChange={handleOnChange}
          name="text"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
