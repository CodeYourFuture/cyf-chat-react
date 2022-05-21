import React, { useState } from "react";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  console.log(responseMessage);

  // async function postInput() {
  //   const message = { from: name, text: text };
  //   const response = await fetch("http://localhost:9000/messages", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     mode: "cors",
  //     body: JSON.stringify(message),
  //   });
  //   console.log(response);
  //   const data = response.json();
  //   console.log(data);
  // }

  const postInput = async () => {
    const message = { from: name, text: text };
    //console.log(message);
    const response = await fetch(
      "https://timeareich-chat-server.glitch.me/messages",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(message),
      }
    );
    const data = await response.json();
    setResponseMessage(data);
  };

  //.then((response) => response.json())
  // .then((res) => {
  //   console.log(res.json());
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((err) => {
  //   console.log("Error:", err);
  // });
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // console.log(response);

  async function handleClick(e) {
    e.preventDefault();
    await postInput();
  }

  return (
    <div>
      <form>
        <label htmlFor="from">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="from"
          placeholder="your name"
        ></input>
        <br />
        <label htmlFor="text">Message:</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          placeholder="your message"
        ></input>
        {responseMessage.warning ? (
          <p className="warning-message">{responseMessage.warning}</p>
        ) : (
          ""
        )}

        <br />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};
export default UserInput;
