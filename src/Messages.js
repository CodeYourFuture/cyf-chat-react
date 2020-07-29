import React from "react";
const Messages = (props) => {
  return (
    <div className="messages">
      {props.messageData.length > 0
        ? props.messageData.map((message) => {
            return (
              <div key={message.id} className="message">
                <h2>{message.id}</h2>
                <h1>{message.from}</h1>
                <p>'{message.text}'</p>
                <h6>{message.timesent}</h6>
                <button
                  className="delet-button"
                  onClick={() => props.deleteMessage(message.id)}
                  method="delete"
                >
                  Delete
                </button>
                <button
                  className="delet-button"
                  onClick={() => props.editMessage(message.id)}
                >
                  Edit
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Messages;
