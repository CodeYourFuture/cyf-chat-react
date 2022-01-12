import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [message, setMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);
  const [sender, setSender] = useState("");
  const [submittedObject, setSubmittedObject] = useState({});

useEffect(() => {
  console.log(submittedObject)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedObject)
        
    };
    fetch('http://localhost:5000/create', requestOptions)
    .then(response => {
      response.json()})
    .then(data => {
      console.log(data)});
      
}, [submittedObject]);

  function toSetName(event){
    setSender(event.target.value);
  }

  function toSetMessage(event){
    setMessage(event.target.value);
  }

  //This function sends the user message
  function sendMessage(event){
    event.preventDefault();
    setSubmittedObject({
      "message" : message,
      "sender" : sender
    });

    setMessagesArray(messagesArray.concat(submittedObject));
  }

  return (
    <div className="App">
      <div className="messageContainer">
          <Message />
          <div className="controls">
              <input type="text" placeholder="please type in your name" onChange={toSetName} value={sender}/>
            <input type="text" placeholder='type a message to send' onChange={toSetMessage} value={message}/>
            <button type="submit" onClick={sendMessage}>Send</button>
            <button type="submit" onClick={sendMessage}>See Latest</button>
          </div>
      </div>
    </div>
  )
}

export default App;
