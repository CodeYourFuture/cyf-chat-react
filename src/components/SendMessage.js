import axios from "axios";
import React, { useState } from "react";

function SendMessage({ updateList }) {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  function handleSend() {
    console.log("click Send");
    axios({
      method: "post",
      url: "http://localhost:5000/messages",
      data: {
        from: from,
        text: text,
      },
    })
      .then(() => updateList())
      .catch((err) => alert(err));
  }

  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          className="form-control"
          id="from"
          placeholder="name"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="col-12">
        <textarea
          className="form-control"
          placeholder="text message"
          id="text"
          rows="2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="col-2 offset-8">
        <button className=" btn btn-outline-success" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default SendMessage;
