import React from "react";
import { Link } from "react-router-dom";

const AllMessagesButton = (props) => {
  // const getAllMessages = async () => {
  //   const response = await fetch("http://localhost:9000/messages");
  //   const data = response.json();
  //   props.setAllMessages(data);
  // };

  // function handleClick() {
  //   fetch("http://localhost:9000/messages")
  //     .then((res) => res.json())
  //     .then((data) => props.setAllMessages(data));
  // }
  // async function handleClick() {
  //   await getAllMessages();
  // }
  return (
    <Link to={"/messages"}>
      <button className="all-messages-button">View All Messages</button>
    </Link>
  );
};
export default AllMessagesButton;
