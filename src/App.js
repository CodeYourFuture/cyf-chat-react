import React, { useState, useEffect } from "react";
import "./App.css";
import ShowMessages from "./components/ShowMessages";

function App() {
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
