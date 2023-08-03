import React, { useState } from "react";

const MainForm = () => {
const [nameData,setNameData] = useState('');
const [textData, setTextData] = useState('');
    
function clickHandler(e) {
  e.preventDefault();
  console.log("helllo");

}

   
  return (
    <div>
      
        <form className="mainForm" onSubmit={clickHandler}>
         <label htmlFor="textArea">Text</label> 
        <textarea id="textArea" value={textData} required placeholder="write here ..." onChange={(e)=>setTextData(e.target.value)}></textarea>

        <label htmlFor="inputId">From</label> 
        <input id="inputId" value={nameData} required  onChange={(e)=>setNameData(e.target.value)} ></input>
         
         <button className="addBtn" type="submit">Add</button>
        </form>
      
    </div>
  );
};
export default MainForm;
