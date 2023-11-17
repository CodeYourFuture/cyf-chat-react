import React from "react";


function OnloadMessages(props) {
    //  const toggleShow = () => props.setDisplayAllMessages((s) => !s);

    function deleteMessage(id) {
      fetch(`https://the-chatterboxers-app.onrender.com/messages/${id}`, {
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
          <div id="msg-greet" key={message.id}>
            <div id="msg-card">
            <p>
              id: {message.id}. <br></br>
              From: {message.from}
            </p>
            <p>{message.text} </p>
            <p>Sent on: {message.timeSent}</p> </div>

            <div id="delbtn"> <button onClick={() => deleteMessage(message.id)}>Delete</button>
          </div>
          </div>
        ))}
    </div>
  );
}

export default OnloadMessages;