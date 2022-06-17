import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput";
import AllMessagesButton from "./AllMessagesButton";
import AllMessages from "./AllMessages";
import LatestMessages from "./LatestMessages";
import LatestMessagesButton from "./LatestMessagesButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [allMessages, setAllMessages] = useState("");
  const [latestMessages, setLatestMessages] = useState("");
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
                <LatestMessagesButton setLatestMessages={setLatestMessages} />
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
        <Route
          path="/messages/latest"
          element={
            <LatestMessages
              allMessages={allMessages}
              latestMessages={latestMessages}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
