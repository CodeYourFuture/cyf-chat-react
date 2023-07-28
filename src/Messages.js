import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import LoadingWait from "./LoadingWait";

function Messages() {
  const [chats, setChats] = useState([]);
  const [chatsReady, setChatsReady] = useState(false);

  useEffect(() => {
    setChatsReady(false);
    fetch("https://malkit-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
        setChatsReady(true);
      });
  }, []);

  return (
    <div>
      <MessageForm setChats={setChats} />
      {chatsReady ? <MessageList chats={chats} setChats={setChats} /> : <LoadingWait />}
    </div>
  );
}

export default Messages;
