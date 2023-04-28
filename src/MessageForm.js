import React, {useState} from "react";

function MessageForm(props) {
  const [displayAllMessages, setDisplayAllMessages] = useState(false);
  const toggleShow = () => setDisplayAllMessages((s) => !s);
  const initialState = {
      name: "",
      message: "",
      time: "",
    };

    const [formData, setFormData] = useState(initialState);


    const handleSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.name,
          text: formData.message,
          timeSent: formData.time,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
           props.fetchMessages();
          setFormData(initialState);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    function handleInputChange(event) {
      event.preventDefault();
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  return (
    <div>
      <button id="start-chat-btn" onClick={() => toggleShow()}>
        <h3>CLICK TO START CHATTERING..!</h3>
      </button>
      {displayAllMessages && (
        <form action="/messages" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">From:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleInputChange}
          />{" "}
          <br />
          <label htmlFor="message">Message:</label>
          <input
            className="message-styles"
            type="text"
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleInputChange}
          />
          <br />
          <div id="message-buttons">
            <button id="send-btn" type="submit">
              <h5>Send Your Msg</h5>
            </button>
          </div>
        </form>
      )}

     
    </div>
  );
}

export default MessageForm;