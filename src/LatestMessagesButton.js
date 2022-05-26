import React from "react";
import { Link } from "react-router-dom";
const LatestMessagesButton = (props) => {
  const handleClick = async () => {
    const response = await fetch(
      "https://timeareich-chat-server.glitch.me/messages/latest"
    );
    const data = await response.json();
    props.setLatestMessages(data);
  };

  return (
    <Link to={"/messages/latest"}>
      <button onClick={handleClick} className="all-messages-button">
        See Latest
      </button>
    </Link>
  );
};
export default LatestMessagesButton;
