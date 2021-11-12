import React from "react";


export default function ShowMessages({ messages, fetchData }) {
  function handleDelete (id) {
      fetch(`https://gulnihal-node-challange-chat-server.glitch.me/messages/${id}`, {
        method: "DELETE",
        
      }).then((response) => fetchData());
  }
  const messagesArr = messages.map((message) => {
    return (
      <div key={message.id}>
        <h2>{message.from}</h2>
        <p>{message.text}</p>
        <button onClick={()=>handleDelete(message.id)}> Delete </button> 
      {/* callback function prevents evoking onClick */}
      </div>
    );
  });

  return <div>{messagesArr}</div>;
}
