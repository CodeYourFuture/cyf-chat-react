import React from "react";

export default function ShowMessages({ messages }) {
  const messagesArr = messages.map((message) => {
    return (
      <div key={message.id}>
        <h2>{message.from}</h2>
        <p>{message.text}</p>
      </div>
    );
  });

  return <div>{messagesArr}</div>;
}
