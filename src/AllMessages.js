import React from "react";
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
    <div>
      {data
        ? data.map((item) => (
            <div className="messages-div">
              <p className="messages" key={item.id}>
                {item.text}
              </p>
              <p className="from" key={item.from}>
                {item.from}
              </p>
            </div>
          ))
        : "waiting..."}
    </div>
  );
};
export default AllMessages;
