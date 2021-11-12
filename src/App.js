import React, { useState, useEffect } from "react";
import "./App.css";
import ShowMessages from "./components/ShowMessages";
import SendMessage from "./components/SendMessage";

function App() {

  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Bart",
      text: "Welcome to CYF chat system!",
    },
  ]);

  const [endpoint, setEndpoint] = useState("messages")
//xxx
  const fetchData = () => {
     fetch(`https://gulnihal-node-challange-chat-server.glitch.me/${endpoint}`)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setMessages(data);
       });
  }
  useEffect(() => {
    console.log(`xxx${endpoint}`); //prevents endpoint dependency error
   fetchData(); //you can't put dependency in, ignore error
  }, [endpoint]);

  const getAllMessages = () => {
    setEndpoint("/messages");
  };

  const latest10Messages = () => {
    setEndpoint("/messages/latest");
  }; 

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={latest10Messages}>Last messages</button>
      <button onClick={getAllMessages}>Show all messages</button>
      <ShowMessages messages={messages} />
      <SendMessage fetchData={fetchData}/>
    </div>
  );
}

export default App;
