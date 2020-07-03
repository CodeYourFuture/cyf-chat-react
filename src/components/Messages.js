import React from "react";
import moment from "moment";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((mess) => (
        <div key={mess.id}>
          <h5>{mess.from}</h5>
          <div className="message">
            <p className="p-message">{mess.text}</p>
          </div>
          <div className="tooltip">
            {moment(mess.timeSent).fromNow()}
            <span className="tooltipText">{mess.timeSent}</span>
          </div>
          <span></span>
        </div>
      ))}
    </div>
  );
};
export default Messages;
