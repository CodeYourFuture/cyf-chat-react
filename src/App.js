import React, { useState, useEffect } from "react";
import "./App.css";
import ShowMessages from "./components/ShowMessages";

function App() {

  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Bart",
      text: "Welcome to CYF chat system!",
    },
  ]);

 
  return (
    <div className="App">
      <h1>Hello world</h1>
      a
      <button onClick={getAllMessages}>Show all messages</button>
      <ShowMessages messages={messages} />
    </div>
  );
}

export default App;
