import React, { useState, useEffect } from "react";
import "./App.css";
import MessageForm from "./MessageForm";
import OnloadMessages from "./OnloadMessages";
// import { Button } from "bootstrap";

function App() {
  const [messages, setMessages] = useState([]);
  const [displayAllMessages, setDisplayAllMessages] = useState(false);
  const [pageRefresh, setPageRefresh] = useState(true);

  function pageRefreshButton(state){
    setPageRefresh(state);
  }
  useEffect(() => {
    // fetchMessages();
    if (pageRefresh){
      return fetchMessages();
    }
  },[pageRefresh, setPageRefresh]);

  const fetchMessages = () => {
    fetch("http://localhost:3001/messages/latest")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessages(data);
        setPageRefresh(false);
      })
      .catch((error) => {
        console.log("Your requested infomation is not currently available!");
      });
  };

  return (
    <div id="message-board">
      <h1>The ChatterBox Corner!</h1>
      <p>
        Where talkatives can express themselves without reserve...!
      </p>
      <OnloadMessages
        setDisplayAllMessages={setDisplayAllMessages}
        displayAllMessages={displayAllMessages}
        messages={messages}
        pageRefreshButton={pageRefreshButton}
      />
      <MessageForm pageRefreshButton={pageRefreshButton} />
    </div>
  );
}


export default App;
