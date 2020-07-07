import React from "react";
import moment from "moment";

const Messages = ({
  messages,
  handleSubmitEdit,
  editButton,
  handleEditText,
  showEditDiv,
  messageEditId
}) => {
  return (
    <div>
      {messages.map(mess => (
        <div key={mess.id}>
          <h5>{mess.from}</h5>
          <div className="message">
            <p className="p-message">{mess.text}</p>
          </div>
          <div className="tooltip">
            {moment(mess.timeSent).fromNow()}
            <span className="tooltipText">{mess.timeSent}</span>
          </div>
          {mess.id === messageEditId && showEditDiv ? (
            <form onSubmit={handleSubmitEdit}>
              <textarea
                className="edit-text"
                name="text"
                onChange={handleEditText}
              >
                {mess.text}
              </textarea>
              <div>
                <button className="sendEditBtn" value={mess.id}>
                  Send
                </button>
              </div>
            </form>
          ) : null}
          <button className="editBtn" value={mess.id} onClick={editButton}>
            {showEditDiv ? "Back" : "Edit"}
          </button>
          <button className="deleteBtn">Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Messages;
