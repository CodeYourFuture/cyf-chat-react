import React from "react";

function MessageCard({ from, text, time = "12:12" }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 class="card-title">{text}</h6>
        <p class="card-text">
          From: {from} / sendTime: {time}
        </p>
        <a href="#" class="btn btn-outline-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default MessageCard;
