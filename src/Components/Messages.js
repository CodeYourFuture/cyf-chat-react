import React ,{ useEffect,useState } from 'react';


  const Messages = () =>{
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessages] = useState({
      from: "",
      text: "",
  });

  // Post New Messages
  function postMessage(url, data) {
     const response = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    postMessage(
      "https://ali-nosratipour-chat-server.glitch.me/messages",
      newMessage
    );
  };

  const handleMessage = (e) => {
    const messageContent= { ...newMessage, [e.target.name]: e.target.value };
    console.log(messageContent);
    setNewMessages(messageContent);
  };

 
  // const handleDelete = (deleteId) => {

  //   //const deleteId = e.target.value;
  //   fetch(
  //     `https://ali-nosratipour-chat-server.glitch.me/messages/${deleteId}`,{
      
  //      method:'DELETE',
  //      headers:{'Accept':'Application/json',
  //       'Content-Type': 'Application/json'
  //      }
  //     });
     
   
  // };


  useEffect(() => {
    fetch("https://ali-nosratipour-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [messages]);


  return (
    <div className="wrapper">
        <div className="container">
          {messages.map((mess) => (
            <div key={mess.id}>
                <hr></hr>
              <h5>{mess.from}</h5>
            
              <div className="message">
                <p>{mess.text}</p>
              </div>
             

            </div>
          ))}
        </div>
      <div className="form-Container">
      <form onSubmit={handleSubmit} className="form-input">
        <input
          className="userName"
          type="text"
          placeholder="Your Name"
          onChange={handleMessage}
          name="from"
        ></input>
        <textarea
          className="message"
          type="text"
          placeholder="Enter message here..."
          rows="6"
          cols="50"
          onChange={handleMessage}
          name="text"
        ></textarea>
        <button>Send</button>
      </form>
      </div>
    </div>
  );




    
}

export default Messages;

