import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddingForm from "./AddingForm";

const Messages = () => {
  const [messages, setMessage] = useState([]);
  const [error, setError] = useState(false);
  let filteredMessages = [];
  useEffect(() => {
    fetch(`https://buchra.glitch.me/messages`)
      .then(res => res.json())
      .then(data => setMessage(data))
      .catch(function(e) {
        setError(true);
        console.log(e.message);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    filteredMessages = messages.filter(
      message =>
        message.text.toLowerCase().includes(searchVal.toLowerCase()) ||
        message.from.toLowerCase().includes(searchVal.toLowerCase())
    );
    setMessage(filteredMessages);
    console.log(filteredMessages);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!error ? (
          messages.length ? (
            <SearchResults results={messages}  messages={messages} setMessage={setMessage} />
          ) : (
            "Loading..."
          )
        ) : (
          "Error"
        )}
        <AddingForm messages={messages} setMessage={setMessage} />
      </div>
    </div>
  );
};

export default Messages;
