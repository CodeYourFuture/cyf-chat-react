import React, { useState } from "react";
import { useGlobalContext } from "./Context";


const ChatFormContainer = () => {
    const [postName, setpostName ] = useState("")
    const [postMessage, setPostMessage ] = useState("")
    const { url } = useGlobalContext();

    const yourname = (e) => {
        setpostName(e.target.value)
    }

    const yourmessage = (e) => {
        setPostMessage(e.target.value)
    }

    const post = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                     from: `${postName}`,
                     text : `${postMessage}`
                 }
             )
        };
        console.log(url[0]);
        fetch(`${url[0]}/messages`, requestOptions)
        .then(response => response.json())
        .then(data =>   this.setState({ postId: data.id }))
       
    }

    return (
        <div className="chat-form-container">
            <div className="chat-form">
                <div className="message-input">
                    <input type="text" value={postName} onChange={yourname} placeholder="your name..."></input>
                    <input type="text" value={postMessage} onChange={yourmessage} placeholder="your message..."></input>
                </div>
                <div className="form-buttons">
                    <span></span>
                    <button className="btn btn-primary" style={{ marginRight:"5px" }} onClick={post}>Send</button>
                    <button className="btn btn-secondary">Send random!</button>
                </div>
            </div>
        </div>

    )
}

export default ChatFormContainer;