import React, { useState, useEffect } from "react";
import "./App.css";
import MessageForm from "./MessageForm";
import OnloadMessages from "./OnloadMessages";
// import { Button } from "bootstrap";

function App() {
  const [messages, setMessages] = useState([]);
  const [displayAllMessages, setDisplayAllMessages] = useState(false);

  useEffect(() => {
    fetchMessages();
  },[]);

  const fetchMessages = () => {
    fetch("http://localhost:3001/messages/latest")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessages(data);
      })
      .catch((error) => {
        console.log("Your requested infomation is not currently available!");
      });
  };

  return (
    <div>
      <h1>The ChatterBox Corner App</h1>
      <OnloadMessages
        setDisplayAllMessages={setDisplayAllMessages}
        displayAllMessages={displayAllMessages}
        messages={messages}
      />
      <MessageForm/>
    </div>
  );
}


export default App;
