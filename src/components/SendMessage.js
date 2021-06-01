import React, { useState } from "react";

function SendMessage() {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  function handleSend(){
      
  }

  return (
    <div className="col-6">
      <div class="">
        <input
          type="text"
          class="form-control"
          id="from"
          placeholder="name"
          value={from}
          onChange={(val) => setFrom(val)}
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          placeholder="text message"
          id="text"
          rows="2"
          value={text}
          onChange={(val) => setText(val)}
        ></textarea>
      </div>
      <button type="button" class="btn btn-outline-success" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default SendMessage;
