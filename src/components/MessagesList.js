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
    console.log("start getMessages");
    axios
      .get("http://localhost:5000/messages")
      .then((res) => {
        setMessages(res.data);
        console.log(res.data);
      })
      .catch((err) => alert(err));
    console.log("end getMessages");
  }

  useEffect(() => {
    getMessages();
  }, []);

  function handleDelete(id) {
    console.log("Deleted:", id);
    axios({
      method: "delete",
      url: `http://localhost:5000/messages/${id}`,
    })
      .then(() => getMessages())
      .catch((err) => alert(err));
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
          time={message.timeSent}
          clickFunc={handleDelete}
        />
      ))}
    </div>
  );
}

export default MessagesList;
