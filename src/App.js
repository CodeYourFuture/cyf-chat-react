import React from "react";
import "./App.css";
import MessagesList from "./components/MessagesList";
import SendMessage from "./components/SendMessage";

function App() {
  return (
    <div className="App d-flex align-items-center flex-column">
      <h1>Chat Room</h1>
      <MessagesList />
      <SendMessage />
    </div>
  );
}

export default App;
