import React from "react";
const LatestMessages = (props) => {
  console.log(props.latestMessages.messages);
  let data = props.latestMessages;

  return (
    <div className="all-messages-div">
      <p>{data.message}</p>
      {data
        ? data.messages.map((item) => (
            <p className="messages" key={item.id}>
              {item.text}
            </p>
          ))
        : ""}
    </div>
  );
};
export default LatestMessages;
