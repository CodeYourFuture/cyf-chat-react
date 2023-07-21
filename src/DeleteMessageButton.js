import React from "react";

function DeleteMessageButton({ messageId, onDelete }) {
  const handleDelete = () => {
    fetch(
      `https://delnia-alipour-chat-server.glitch.me/messages/${messageId}`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.status === 200) {
        onDelete(messageId);
      }
    });
    console.log({ messageId });
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteMessageButton;
