import React from "react";
import { useGlobalContext } from "./Context";
import faker from  "faker";


const ChatFormContainer = () => {
    const { yourname, yourmessage, postName, postMessage,id, setId, setPostMessage, setpostName, setData, selectValue, url} =useGlobalContext();

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
            fetch(`${selectValue.length > 0 ? selectValue[0] : url[0]}/messages/${id}`, update)
            .then(response => response.json())
            .then(data =>   console.warn(data))
        }else {
            setPostMessage("")
            setpostName("")
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
            fetch(`${selectValue.length > 0 ? selectValue[0] : url[0]}/messages/${id}`, requestOptions)
            .then(response => response.json())
            .then(data =>   console.warn(data))
        }
    }
    const sendrandom = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {    id: faker.datatype.number(),
                     from: faker.name.findName(),
                     text : faker.lorem.sentences()
                 }
             )
        };
        fetch(`${selectValue[0]}/messages`, requestOptions)
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
                   <div>{id ?  <h4>ID number:{id}</h4> : null } </div>
                    <input type="text" value={postName} onChange={yourname} placeholder="your name..."></input>
                    <input type="text" value={postMessage} onChange={yourmessage} placeholder="your message..."></input>
                </div>
                <div className="form-buttons"> 
                    <button className="btn btn-primary" style={{ marginRight:"5px" }} onClick={post}>Send</button>
                    <button className="btn btn-secondary" onClick={sendrandom}>Send random!</button>
                </div>
            </div>
        </div>

    )
}

export default ChatFormContainer;