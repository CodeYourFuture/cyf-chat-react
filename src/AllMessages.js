import React, { useEffect } from "react";
const AllMessages = (props) => {
  console.log(props.allMessages);
  useEffect(() => {
    fetch("https://timeareich-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => props.setAllMessages(data));
  }, []);
  const data = props.allMessages;
  console.log(data);
  return (
    <div>
      {data
        ? data.map((item) => <p key={item.id}>{item.text}</p>)
        : "waiting..."}
    </div>
  );
};
export default AllMessages;
