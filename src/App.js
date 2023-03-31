import React from "react";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <h1>LORENA'S CHAT SERVER</h1>
      <div className="inputContainer">
        <input id="inputName" type="text" value="Name" />
        <input id="inputMessage" type="text" value="Your Message..." />
        <input id="submitBtn" type="submit" />
      </div>
      <Home />
    </div>
  );
}

export default App;
