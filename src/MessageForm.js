import React, {useState} from "react";

// const initialState = {
//     name: "",
//     message: "",
//     time: "",
//   };
//   const [formData, setFormData] = useState(initialState);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("https://chat-server-u011.onrender.com/messages", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: formData.name,
//         text: formData.message,
//         timeSent: formData.time,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         props.fetchAllMessages();
//         props.refreshingList(true);
//         setFormData(initialState);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   function handleInputChange(event) {
//     event.preventDefault();
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   return (
//     <form action="/messages" method="post" onSubmit={handleSubmit}>
//       <div className="name-container">
//         <label htmlFor="name floatingInput">Please enter your name</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Type name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="message">Please enter your message</label>
//         <input
//           type="text"
//           name="message"
//           placeholder="Type message"
//           value={formData.message}
//           onChange={handleInputChange}
//         />
//       </div>

//       <button type="submit" className="submit-btn">
//         Submit
//       </button>
//     </form>
//   );
// }




function MessageForm() {
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
      <button id="show-form-button" onClick={() => toggleShow()}>
        <h3>Click To Send A Message!</h3>
      </button>
      {displayAllMessages && (
        <form action="/messages" method="post" onSubmit={handleSubmit}>

          <label htmlFor="name">FROM:</label>
          <input type="text" name="name" value={formData.name}placeholder="Your Name" onChange={handleInputChange} /> <br />

          <label htmlFor="message">Message:</label>
          <input
            className="message-styles"
            type="text"
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
          onChange={handleInputChange}/>
          <br />

          <div id="message-buttons">
            <button id="send-btn" type="submit">
              <h5>Send Your Msg</h5>
            </button>
          </div>

          <button id="all-message-btn">
            <a href="/message.json">
              <h5>See All Messages</h5>
            </a>
          </button>
          
        </form>
      )}
    </div>
  );
}

export default MessageForm;