

import React from "react";

const NewMessage = (props) => {
 const { setLoadData } = props;
 function deletBtnHandler(e) {
  console.log("deleting.....");
  console.log(props.item.id);
   e.preventDefault();
   const deleteMessage = {
     from: props.item.from,
     text: props.item.text,
     id: props.item.id,
   };
   fetch(`http://localhost:9090/messages/${props.item.id}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(deleteMessage),
   }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
   setLoadData(data);
 })
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


 