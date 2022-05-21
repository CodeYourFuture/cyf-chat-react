import React, { useEffect } from "react";
const AllMessages = (props) => {
  // console.log(props.allMessages);
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://timeareich-chat-server.glitch.me/messages"
  //   );
  //   const data = await response;
  //   console.log(data);
  // };

  const data = props.allMessages;
  // console.log(data);
  return (
    <div className="messages-div">
      {data
        ? data.map((item) => (
            <p className="messages" key={item.id}>
              {item.text}
            </p>
          ))
        : "waiting..."}
    </div>
  );
};
export default AllMessages;
