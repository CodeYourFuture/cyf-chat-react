import React, { useState } from "react";
import NewMessage from "./NewMessage";

const MainForm = (props) => {
  const {loadData,setLoadData} = props;

const [nameData,setNameData] = useState('');
const [textData, setTextData] = useState('');
    
function clickHandler(e) {
  e.preventDefault();
  const newMessage = { from: nameData, text: textData, id:loadData.length };
  //fetch for post method
  fetch(`http://localhost:9090/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  })
  
  //with updating the state we can call get api again from backend and have 
  //an array with all the previous obj with the new one that we posted 
  setLoadData((prevLoadData) => [...loadData,newMessage]); 
}

   
  return (
    <div>
      <form className="mainForm" onSubmit={clickHandler}>
        <label htmlFor="textArea" className="textArea">
          Text
        </label>
        <textarea
          id="textArea"
          value={textData}
          required
          placeholder="write here ..."
          onChange={(e) => setTextData(e.target.value)}
        ></textarea>

        <label htmlFor="inputId" className="inputId">
          From
        </label>
        <input
          id="inputId"
          value={nameData}
          required
          onChange={(e) => setNameData(e.target.value)}
        ></input>

        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
      {console.log(loadData)};
      {loadData.map((item) => (
        <NewMessage
          key={item.id}
          item={item}
          loadData={loadData}
          setLoadData={setLoadData}
        />
      ))}
      {/* <NewMessage name={nameData} text={textData}/> */}
    </div>
  );
  
};
export default MainForm;
