import React, { useState } from "react";
const AddingForm = ({ messages, setMessage }) => {
  const [newmessages, setNewMessage] = useState({});
  
  function createNewMessage(event) {
    event.preventDefault();
    newmessages.id = messages.length + 1;
    newmessages.timeSent=new Date().toISOString();
    console.log(newmessages);
    console.log(Object.values(newmessages));
    if (Object.values(newmessages).length === 4) {
      setMessage(messages.concat(newmessages));
      console.log(newmessages);
      return fetch("https://buchra.glitch.me/messages",{method:"POST",
       body: JSON.stringify({
      //id:Number(newmessages.id),
      from:newmessages.from ,
      text:newmessages.text }),
      //timesent:new Date(newmessages.timeSent),
      headers: {
        'Content-Type': 'application/json'
    }
      })
    .then(res => res.text()) 
.then(res => {console.log(res)
  setNewMessage({});
})
     
    } else alert(`Please make sure that you enter a value in all the inputs`);
    
    }
  function handleInputChange(event) {
    const tempBooking = {
      ...newmessages,
      [event.target.name]: event.target.value
    };
event.preventDefault();
    setNewMessage(tempBooking);
  
  }
  return (
    <form>
      <div className="form-group">
        <p>Adding a New Message</p>
        <input
          type="text"
          name="from"
          value={newmessages.from || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the Title"
        />
        <br />
        <input
          type="text"
          name="text"
          value={newmessages.text || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the first name"
        />
        <br />

        
        <br />

        <button className="btn btn-primary" onClick={createNewMessage}>
          Create a New Message
        </button>
      </div>
    </form>
  );
};
export default AddingForm;
