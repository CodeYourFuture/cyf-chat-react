import React, { useState, useEffect } from "react";
import "./Messages.css";
import Message from "./Message";
import MessageForm from "./MessageForm";

function Messages() {
  const [chats, setChats] = useState([]);
  const [deleteRow, setDeleteRow] = useState(null);
  useEffect(() => {
    fetch("https://malkit-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
      });
  }, []);

  useEffect(() => {
    if (deleteRow || deleteRow === 0)
      fetch("https://malkit-chat-server.glitch.me/messages/" + deleteRow, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          setChats(data);
        });
  }, [deleteRow]);

  return (
    <div>
      <MessageForm setChats={setChats} />
      <ul className="message-list">
        {chats.map((chat) => {
          return (
            <li key={chat.id}>
              <Message chat={chat} deleteRow={deleteRow} setDeleteRow={setDeleteRow} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Messages;
