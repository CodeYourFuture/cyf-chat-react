import React, { useEffect, useState } from "react";
import CardMessage from "./CardMessage";

function ChatMessages(props) {
  
  const [loadMessages, setLoadMessages] = useState(true);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const resetForm = (event) => {
    setId(null);
    setFrom("");
    setText("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(from === '' || text === '') {
       alert("Please enter name and text");
       return; 
    }

    alert(`Entered by : ${from} Message: ${text}`);
    //post to api.

    let method = "POST";

    if (id !== null)
    {
         method = "PUT";
    }

    fetch("https://kavita-repeated-chestnut-jobaria.glitch.me/messages", {
      method: method,
      body: JSON.stringify({
        id: id,
        from: from,
        text: text
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        resetForm();
        setLoadMessages(!loadMessages);
    })
    .catch(error => {
            alert("Could not save!")
            console.error('There was an error!', error);
    });

  };


  const handleEdit = (message) => {
    console.log(JSON.stringify(message));
    setId(message.id);
    setFrom(message.from);
    setText(message.text);
  };

  const handleDelete = (id) => {
    // /messages/id
    let method = "DELETE";

    fetch(`https://kavita-repeated-chestnut-jobaria.glitch.me/messages/${id}`, { method: method })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success: delete', id);
        setLoadMessages(!loadMessages);
    })
    .catch(error => {
            alert("Could not delete!")
            console.error('There was an error!', error);
    });
  };

  const onSave = () => {
    setLoadMessages(!loadMessages);
  };
 
  useEffect(() => {
    fetch(`https://kavita-repeated-chestnut-jobaria.glitch.me/messages`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [loadMessages]);

  return (
    <div>
      {data.length === 0 ? (
        <div className="d-flex flex-column align-items-center g-4 py-5 gap-2">loading...</div>
      ) : (
    
        data.map((message) => {
          return (
            <div className="d-flex flex-column align-items-center g-4 py-2">
              <CardMessage
                key={message.id}
                id={message.id}
                from={message.from}
                text={message.text}
                handleEdit={() => handleEdit(message)}
                handleDelete={() => handleDelete(message.id)}
              />
            </div>
          );
        })
            
      )}

      <div className="modal modal-sheet position-static d-block bg-secondary py-5 w-50 p-4 text-center container rounded-4 shadow">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <input
                    id="nameInput"
                    type="text"
                    value={from}
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={(e) => setFrom(e.target.value)}
                />
                </div>
                <div className="mb-3">
                <input
                    id="nameInput"
                    type="text"
                    value={text}
                    className="form-control"
                    placeholder="Enter your message"
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
                <button type="submit" className="btn btn-primary shadow">Send</button>
            </form>
            </div>
    </div>
  );
}

export default ChatMessages;
