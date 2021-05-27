import React from "react";
import { useGlobalContext } from "./Context";
import faker from  "faker";


const ChatFormContainer = () => {
    const { yourname, yourmessage, postName, postMessage, url, id, setId, setPostMessage, setpostName, setData, selectValue } =useGlobalContext()
    
    console.log(faker.datatype.number());
    const post = () => {

        if(id){
            setId("")
            setPostMessage("")
            setpostName("")
            const update = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'accept' : 'application/json'
            
            },
                body: JSON.stringify(
                    {    id: id,
                         from: `${postName}`,
                         text : `${postMessage}`
                     }
                 )
            };
            fetch(`${url[0]}/messages/${id}`, update)
            .then(response => response.json())
            .then(data =>   console.warn(data))
        }else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {    id: faker.datatype.number(),
                         from: `${postName}`,
                         text : `${postMessage}`
                     }
                 )
            };
            fetch(`${url[0]}/messages`, requestOptions)
            .then(response => response.json())
            .then(data =>   console.warn(data))
        }
    }
    const sendrandom = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {    id:faker.datatype.number(),
                     from: faker.name.findName(),
                     text : faker.lorem.sentences()
                 }
             )
        };
        fetch(`${url[0]}/messages`, requestOptions)
        .then((response) =>
        {
            response.json().then((data) => {
            console.warn(data) 
            const second = `${selectValue[0]}/messages`
              console.log("hello")
            fetch(second)
            .then(response => response.json())
            .then(data => setData(data));

        })
    } )
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
                    <button className="btn btn-secondary" onClick={sendrandom}>Send random!</button>
                </div>
            </div>
        </div>

    )
}

export default ChatFormContainer;