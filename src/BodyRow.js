import React, { useState } from "react";

import "./BodyRow.css";
//import Messages from "./Messages";

const BodyRow = ({ content, messages,setMessage}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
//   useEffect(() => {
//     //fetch(`https://cyf-react.glitch.me/er`)
//     //fetch(`https://cyf-react.glitch.me/delayed`)
//     fetch(`https://cyf-react.glitch.me`)
//       .then(res => res.json())
//       .then(data => setBooking(data))
//       .catch(function(e) {
//         setError(true);
//         console.log(e.message);
//       });
//   }, []);
  const deleteMessage = (event) => {
    console.log(content.id);
    event.preventDefault();
    event.stopPropagation();
    return fetch("https://buchra.glitch.me/messages/"+content.id,{method:"DELETE"})
    .then(res => res.text()) 
.then(res => {console.log(res)
//setMessage(res);
let requiredIndex=messages.findIndex(m=>m.id===content.id);
console.log(requiredIndex);
  if(requiredIndex>=0){
  //messages.splice(requiredIndex,1)
setMessage(messages.slice(requiredIndex,1));
console.log(messages);
}

  });
  }

  return (
    <tr onClick={handleClick} className={isSelected ? "selected" : null}>
      <th scope="row">{content.id}</th>
      <td title="title" >
        {content.from}
      </td>
      <td title="text" >
        {content.text}
      </td>
      <td title="timeSent" >
        {content.timeSent}
      </td>
      <td>
        <button className="btn btn-primary" onClick={deleteMessage}>
          Delete Message
        </button>
      </td>
    </tr>
  );
};
export default BodyRow;
