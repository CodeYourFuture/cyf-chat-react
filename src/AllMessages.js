import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

const AllMessages = (props) => {
  // console.log(props.allMessages);
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://timeareich-chat-server.glitch.me/messages"
  //   );
  //   const data = await response;
  //   console.log(data);
  // };

  // console.log(data);
  const onClickHandle = async (index) => {
    const response = await fetch(
      `https://timeareich-chat-server.glitch.me/messages${index}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      }
    );
    const data = await response.json();
    props.setAllMessages(data.messages);
  };
  const data = props.allMessages;
  return (
    <div>
      {data
        ? data.map((item, index) => (
            <div key={item.id} className="messages-div">
              <p className="messages">{item.text}</p>
              <p className="from">{item.from}</p>
              <button
                onClick={onClickHandle.bind(null, index)}
                className="erase-button"
              >
                {" "}
                <FontAwesomeIcon icon={faEraser} />{" "}
              </button>
            </div>
          ))
        : "waiting..."}
    </div>
  );
};
export default AllMessages;
