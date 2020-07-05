import React from "react";
const Messages = (props) => {
  return (
    <div className="messages">
      {props.messageData.length > 0
        ? props.messageData.map((message) => {
            return (
              <div key={message.id} className="message">
                <h2>Id: {message.id}</h2>
                <h4>Name: {message.from}</h4>
                <p>
                  <b>message: </b>
                  {message.text}
                </p>
                <h5>
                  <b>timeSent: </b>
                  {message.timesent}
                </h5>
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
