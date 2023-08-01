import React, { useState, useEffect } from "react";
import "./MessageList.css";
import Message from "./Message";

function MessageList(props) {
  const [deleteRow, setDeleteRow] = useState(null);

  useEffect(() => {
    if (deleteRow || deleteRow === 0)
      fetch("https://malkit-chat-server.glitch.me/messages/" + deleteRow, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          props.setChats(data);
        });
  }, [deleteRow]);

  return (
    <div>
      <ul className="message-list">
        {props.chats.map((chat) => {
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

export default MessageList;
