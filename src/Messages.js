import React from "react";
const Messages = (props) => {
  return (
    <div className="messages">
      {props.messageData.length > 0
        ? props.messageData.map((message) => {
            return (
              <div key={message.id} className="message">
                <h4>{message.from}</h4>
                <p>'{message.text}'</p>
                <h6>{message.timesent}</h6>
                <button
                  className="delet-button"
                  onClick={() => props.deleteMessage(message.id)}
                  method="delete"
                >
                  Delete
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Messages;
