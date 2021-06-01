import React from "react";

function MessageCard({ id, from, text, time = "12:12", clickFunc }) {
  return (
    <div className="card m-2">
      <div className="card-header align-self-start p-0">{from}</div>
      <div className="card-body align-self-start m-0 p-0">
        <h6 className="card-text p-1 ">{text}</h6>
      </div>
      <div className="card-footer text-muted align-self-end p-0">
        <button
          className="btn btn-outline-danger m-0 p-0"
          onClick={() => {
            clickFunc(id);
          }}
        >
          Delete
        </button>
        {time}
      </div>
    </div>
  );
}

export default MessageCard;
