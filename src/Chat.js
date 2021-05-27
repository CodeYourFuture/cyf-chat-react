import React from "react";

const Chat = ({askAPI, update, setUpdate, name, setName, message, setMessage}) => {



    const submitForm = (e) => {
        e.preventDefault();
        let newMessage = {
            "from": name,
            "text": message
        };


        if (!!update){
                const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        };

        fetch(`https://gtabala-chat-server.glitch.me/messages/${update-1}`, requestOptions)
            .then(x => x.json())
            .then(x => {console.log(x);
              
              askAPI();
           
            setName("");
            setMessage("");  
            setUpdate(0);   
            });
             

        } else {const requestOptions = {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        };

        fetch("https://gtabala-chat-server.glitch.me/messages/", requestOptions)
            .then(x => x.json())

            .then(x => {console.log(x)
             
            askAPI();
            setName("");
            setMessage("");
            });
          }
    }
   

    return (
        <div>
          <form onSubmit={submitForm}>
            <label>
                Name:
            </label>
            <input type="text" name="name" value={name} placeholder="Enter name" onChange={e => setName(e.target.value)} />
            <br/><br/>
            <label>
                Message:
            </label>

            <input type="text" name="message" value={message} placeholder="Enter your message here" onChange={e => setMessage(e.target.value)} />
            <br/><br/>
  

            <button onClick={submitForm}>

               {update ? "Update":"Post"}

            </button>
            </form>
        </div>
    )
};

export default Chat;