import React from "react";
import { Link } from "react-router-dom";

const AllMessagesButton = (props) => {
  const handleClick = () => {
    fetch("https://timeareich-chat-server.glitch.me/messages")
      .then((response) => response.json())
      .then((data) => props.setAllMessages(data));
  };

  // function handleClick() {
  //   fetch("https://timeareich-chat-server.glitch.me/messages")
  //     .then((res) => res.json())
  //     .then((data) => props.setAllMessages(data));
  // }
  // async function handleClick() {
  //   await getAllMessages();
  // }
  return (
    <Link to={"/messages"}>
      <button onClick={handleClick} className="all-messages-button">
        View All Messages
      </button>
    </Link>
  );
};
export default AllMessagesButton;
