import React, { useEffect, useState } from "react";
import SendMessage from "./SendMessage.js";
import Messages from "./Messages.js";
import "./App.css";

function App() {
  const [messageData, setMessageData] = useState([]);
  const [routeName, setRouteName]=useState("");
  const [route, setRoute] = useState("");
  const [methodName, setMethodName]=useState("GET")
  const [requestOption, setRequestOption] = useState({ method: methodName });
  const [formData, setFormData]=useState({
    from:'',
    text:''
  })
  const [displayForm, setDisplayForm]=useState("hide")

  useEffect(() => {
    fetch(
      `https://cyf-nader-chat-server.herokuapp.com/messages/${route}`,
      requestOption
    )
      .then((res) => res.json())
      .then((data) => setMessageData(data));
  }, [route, requestOption]);

  const seeLatest = () => {
    setRoute("latest");
    setRequestOption({
      method: "GET",
    });
  };

  const searchById = (event) => {
    setRoute(event.target.value);
    setRequestOption({
      method: "GET",
    });
  };

  const deleteMessage = (id) => {
    setRoute(id);
    setRequestOption({
      method: "DELETE",
    });
  };

  const newMessage = (e) => {
    e.preventDefault();
    setDisplayForm("hide")
    setRequestOption({
      method: methodName,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    setRoute(routeName)
    
  };

  const editMessage = (id)=>{
    setDisplayForm("show")
    setRouteName(id)
    setMethodName("PUT")
  }

  const showMessageForm = ()=>{
    setDisplayForm("show")
    setRouteName("add")
    setMethodName("POST")
  }
  return (
    <div>
      <div className="heading">
        <div>
          <h1>Wellcome to CYF chat app</h1>
        </div>
        <div className="search">
          <div>
            <button onClick={seeLatest}>see latest</button>
            <button onClick={showMessageForm}>New Message</button>
            <input placeholder="search by id" onChange={searchById}></input>
          </div>
          
        </div>
        
      
      </div>
      <div>
      <SendMessage
            newMessage={newMessage}
            setFormData={setFormData}
            formData={formData}
            displayForm={displayForm}
            setDisplayForm={setDisplayForm}
          />
        <Messages messageData={messageData} deleteMessage={deleteMessage} editMessage={editMessage}/>
      </div>
    </div>
  );
}

export default App;
