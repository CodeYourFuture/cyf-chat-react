

import React from "react";

const NewMessage = (props) => {
 const {setLoadData } = props;
 function deletBtnHandler(e) {
  
   e.preventDefault();
   const deleteMessage = {
     from: props.item.from,
     text: props.item.text,
     id: props.item.id,
   };
   fetch(`https://chat-server-nke3.onrender.com/messages/${props.item.id}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(deleteMessage),
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       return response.json();
     })
     .then((data) => {
       setLoadData(data);
     });
 }

  return (
    <div>
      <div className="mainMessageDiv">
        <div className="textDiv">
          <p>{props.item.text}</p>
        </div>
        <div className="fromDiv">
          <p>{props.item.from}</p>
        </div>
        <div className="deleteDiv">
          <button className="deleteBtn" onClick={deletBtnHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
  
};

export default NewMessage;


 