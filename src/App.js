import React from "react";
import LatestMessages from "./LatestMessages";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      </header>
      <LatestMessages />
    </div>
  );
}

export default App;
