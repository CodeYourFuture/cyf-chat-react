// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Message from './Message';
import './App.css';
import Chat from './Chat';

function App() {

const [messages, setMessages] = useState([]);
const [kick, setKick] = useState(true);

const [update, setUpdate] = useState(0);
const [name, setName] = useState("");
const [message, setMessage] = useState("");



const askAPI = () => {
  setKick(!kick);
};


useEffect(() => {
    fetch("https://gtabala-chat-server.glitch.me/messages/")
    .then(response => response.json())
    .then(response => setMessages(response));
  },[kick]
);

// Commented out due to Glitch blocking
// setInterval(() => {
//   setKick(!kick);
// }, 30000);

  return (
    <div className="App">

{

  messages.map((item, ind) => <Message key={ind} msg={item} askAPI={askAPI} setUpdate={setUpdate} setName={setName} setMessage={setMessage} />)
}
      <Chat askAPI={askAPI} update={update} setUpdate={setUpdate} name={name} setName={setName} message={message} setMessage={setMessage} />

    </div>
  );
}

export default App;
