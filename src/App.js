// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "./App.css";
import MessageForm from "./MessageForm";
import OnloadMessages from "./OnloadMessages";

function App() {
  const [messages, setMessages] = useState([]);
  const [displayAllMessages, setDisplayAllMessages] = useState(false);
  const [showLatest, setShowLatest] = useState(false);

  const fetchMessages = () => {
    fetch("https://the-chatterboxers-app.onrender.com/messages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessages(data);
      })
      .catch((error) => {
        console.log("Your requested infomation is not currently available!");
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const latestMessages = [...messages.slice(-3)];
  const messagesDisplayed = showLatest ? latestMessages : messages;

  return (
    <div id="message-board">
      <h1>The ChatterBox Corner!</h1>
      <p>
        Welcome to the ChatterBox Corner..!<br></br> A place where talkatives and
        chatterheads can express themselves without reserve...!
      </p>

      <MessageForm fetchMessages={fetchMessages} />

      <OnloadMessages
        setDisplayAllMessages={setDisplayAllMessages}
        displayAllMessages={displayAllMessages}
        messages={messagesDisplayed}
      />
      <div className="latest-see-all-btns">
        <button
          id="see-latest"
          onClick={() => {
            setDisplayAllMessages(true);
            setShowLatest(true);
          }}
        >
          See Newest Messages
        </button>

        <button
          id="all-message-btn"
          onClick={() => {
            setDisplayAllMessages(true);
            setShowLatest(false);
          }}
        >
          <h5>See All Messages</h5>
        </button>

        <button
          id="hide-message-btn"
          onClick={() => {
            setDisplayAllMessages(false);
          }}
        >
          <h5>Hide Messages</h5>
        </button>
      </div>
    </div>
  );
}

export default App;
