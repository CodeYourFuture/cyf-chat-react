import React from "react";

function SendMessage() {
  return (
    <div style={divStyle}>
      <h2 style={{ margin: "0" }}>Send a message</h2>
      <form
        action="https://kadir-chat-server.glitch.me/messages"
        method="post"
        style={formStyle}
      >
        <p style={paraStyle}>
          <div style={padding}>
            <input type="text" name="from" placeholder="Your Name" />
          </div>
          <div style={padding}>
            <input type="text" name="text" placeholder="The message..." />
          </div>
        </p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

const divStyle = {
  display: `flex`,
  flexDirection: "column",
  alignItems: "center",
  margin: "10px 0",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px 0"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const paraStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const padding = { padding: "5px" };

export default SendMessage;
