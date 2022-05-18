import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput";
import AllMessagesButton from "./AllMessagesButton";
import AllMessages from "./AllMessages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [allMessages, setAllMessages] = useState("");

  console.log(allMessages);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <h1>CYF CHAT</h1>
                <UserInput setAllMessages={setAllMessages} />
                <AllMessagesButton setAllMessages={setAllMessages} />
              </header>
            </div>
          }
        />
        <Route
          path="/messages"
          element={
            <AllMessages
              setAllMessages={setAllMessages}
              allMessages={allMessages}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
