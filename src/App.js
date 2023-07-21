import React from "react";
import "./App.css";
import DisplayMessages from "./DisplayMessages";

import SeeLatestButton from "./SeeLatestButton.js";

function App() {
  return (
    <div className="App">
      <DisplayMessages />
      <SeeLatestButton />
    </div>
  );
}

export default App;
