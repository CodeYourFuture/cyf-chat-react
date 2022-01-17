import React, {useState, useEffect} from 'react';
import './App.css'

function LastTenMessages(){
    let [messages, setMessages] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/latest')
    .then(response => response.json())
    .then(data => {
        console.log(data.messages)
        return setMessages(data.messages)});
      
    }, [messages]);

    function deleteMessage(){
        
    }

    return(
        <div>
            {messages.map((message,index) => <div className="messageDiv" key={index}><h1>{message.text}</h1><p>sent by {message.from} at {message.timeSent}</p></div>)}  
        </div>
        
    )

}

export default LastTenMessages;