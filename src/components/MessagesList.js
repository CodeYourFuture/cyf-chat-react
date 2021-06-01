import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageCard from "./MessageCard";
import SendMessage from "./SendMessage";

function MessagesList() {
  const [messages, setMessages] = useState([]);

  function getMessages() {
    // const url = "/messages";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setMessages(data))
    //   .catch((err) => alert(err));
    axios
      .get("http://localhost:5000/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getMessages();
  }, []);

  function handleDelete(id) {
    console.log(id);
  }

  return (
    <div className="border m-3 p-3 col-6">
      <SendMessage updateList={getMessages} />
      {messages.reverse().map((message, index) => (
        <MessageCard
          key={message.id}
          id={message.id}
          from={message.from}
          text={message.text}
          time={messages.timeSent}
          clickFunc={handleDelete}
        />
      ))}
    </div>
  );
}

export default MessagesList;
