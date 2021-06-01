import React ,{ useEffect,useState } from 'react';




const Messages = () =>{


  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState({
    from: "",
    text: "",
  });

  function postMessage(url, data) {
    const response = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => console.log("Message Send!"));
    return response;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newMessage);
    postMessage(
      "https://ali-nosratipour-chat-server.glitch.me/messages",
      newMessage
    );
  };

  const handleOnChange = (e) => {
    const some = { ...newMessage, [e.target.name]: e.target.value };
    setNewMessages(some);
  };


  useEffect(() => {
    fetch("https://ali-nosratipour-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [messages]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {messages.map((mess) => (
            <div key={mess.id}>
              <h5>{mess.from}</h5>
              <div className="message">
                <p>{mess.text}</p>
              </div>
              <span>{mess.timeSent}</span>
            </div>
          ))}
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleOnChange}
          name="from"
        ></input>
        <textarea
          type="text"
          placeholder="Enter message here..."
          rows="6"
          cols="50"
          onChange={handleOnChange}
          name="text"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );




    useEffect(() =>{
        getMessage();
      },[])
      
    


const getMessage = () =>{
  fetch(`https://ali-nosratipour-chat-server.glitch.me/messages`)
  .then(res => res.json())
  .then(json => setMessages(json))
}




      const handelLatest = () =>{
        getMessage();
      }
      
    

      return (
        <div className="App">
         
        <div className="btn-holder">
          <button    onClick={handelLatest} >See Latest</button>

       </div>  
        <div className="wrapper">
         <div className="container">
       <div>{messages.map(mes =>{
         return(
           <div>
             <h3>{mes.from}</h3>
              <p>{mes.text}</p>
           </div>
         );
       })}</div>
      
       </div>
        </div>
        
        </div>
      );   



}

export default Messages;

