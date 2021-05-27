import React from "react";


const ChatFormContainer = () => {
    return (
        <div className="chat-form-container">
            <div className="chat-form">
                <div className="message-input">
                    <input type="text" value="" placeholder="your name..."></input>
                    <input type="text" value="" placeholder="your message..."></input>
                </div>
                <div className="form-buttons">
                    <button class="btn btn-primary" style={{ marginRight:"5px" }}>Send</button>
                    <button class="btn btn-secondary">Send random!</button>
                </div>
            </div>
        </div>

    )
}

export default ChatFormContainer;