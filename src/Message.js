import React, {useState, useEffect} from 'react';
import './App.css'

function Message(){
    let [messages, setMessages] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/allmessages')
    .then(response => response.json())
    .then(data => {
        return setMessages(data.messages)});
      
    }, [messages]);

    function deleteMessage(){
        
    }

    return(
        <div>
            {messages.map((message,index) => <div className="messageDiv" key={index}><h1>{message.text}</h1><p>sent by {message.from} at {message.timeSent}</p><div className="buttonsDiv"><button onClick={deleteMessage} type="button">Delete</button><button type="button">Update</button></div></div>)}  
        </div>
        
    )

}

export default Message;