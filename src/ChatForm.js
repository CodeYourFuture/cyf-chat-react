import React, { useState } from "react";

async function postData(url = "", data = {}) {
  console.log("trying to post", data);
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors",
    headers: {
       "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log(response);
  return response.text(); // parses JSON response into native JavaScript objects
}


const ChatForm = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("trying to submit");

    postData("https://amarachi-cyf-chat--server-challenge.glitch.me/messages", {
      text: text,
      from: name,
    })
      .then((data) => {
        console.log("posted data", data); // JSON data parsed by `data.json()` call
      })
      .catch((err) => console.log(err));
    setName("");
    setText("");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <label>Name:</label>
      <br />
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      <br />
      <label>Messages:</label>
      <br />
      <input type="text" id="text" value={text} onChange={handleTextChange} />
      <br />
      <b />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default ChatForm;
