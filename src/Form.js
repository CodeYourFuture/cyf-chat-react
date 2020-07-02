import React, { useState } from "react";

const Form = () => {
  const [id, setId] = useState("");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  function handleIdChange(event) {
    setId(event.target.value);
  }
  function handleFromChange(event) {
    setFrom(event.target.value);
  }
  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({ id, from, text });
    fetch(`http://localhost:3001/messages`, { method: "POST", body })
      .then((res) => res.json())
      .then();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        ID:{" "}
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleIdChange}
          placeholder="Your Name"
        />{" "}
        <br />
        Name:{" "}
        <input
          type="text"
          name="from"
          value={from}
          onChange={handleFromChange}
          placeholder="Your Name"
        />{" "}
        <br />
        Message:{" "}
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="The message..."
        />
        <br />
      </p>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
