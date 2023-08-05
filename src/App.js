
import React, { useEffect, useState } from "react";
import MainForm from './MainForm.js';
import Header from './Header.js';

import './App.css';


function App() {

   const [loadData, setLoadData] = useState([]);
console.log(loadData);
   useEffect(() => {
    //we get all data from backend with get api
     fetch(`https://chat-server-nke3.onrender.com/messages`)
       .then((res) => res.json())
       .then((data) => {
         setLoadData(data);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
   }, [setLoadData]);
   console.log(loadData);
  return (
    <div className="App">
      <Header/>
      <MainForm loadData={loadData} setLoadData={setLoadData}/>
    </div>
  );
}

export default App;
