import React from "react";


function OnloadMessages(props) {
    //  const toggleShow = () => props.setDisplayAllMessages((s) => !s);

    function deleteMessage(id) {
      fetch(`http://localhost:3001/messages/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          console.log("Message Deleted " + id);
          alert("Message deleted");
        })
        .catch((error) => console.log(error));
    }

  return (
    <div>
      {/* <button id="see-latest" onClick={() => toggleShow()}>
        See Latest
      </button> */}
      {props.displayAllMessages &&
        props.messages.map((message) => (
          <div key={message.id}>
            <p>
              {message.from} - {message.timeSent}
            </p>
            <p>{message.text} {message.id}</p>

            <button onClick={() => deleteMessage(message.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default OnloadMessages;