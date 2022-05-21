import React from "react";
import { Link } from "react-router-dom";

const AllMessagesButton = (props) => {
  // const handleClick = () => {
  //   fetch("https://timeareich-chat-server.glitch.me/messages")
  //     .then((response) => response.json())
  //     .then((data) => props.setAllMessages(data));
  // };

  const handleClick = async () => {
    const response = await fetch(
      "https://timeareich-chat-server.glitch.me/messages"
    );
    const data = await response.json();
    props.setAllMessages(data);
  };

  return (
    <Link to={"/messages"}>
      <button onClick={handleClick} className="all-messages-button">
        View All Messages
      </button>
    </Link>
  );
};
export default AllMessagesButton;
