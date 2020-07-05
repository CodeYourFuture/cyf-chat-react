import React, { useEffect, useState } from "react";
import SendMessage from "./SendMessage.js";
import Messages from "./Messages.js";
import "./App.css";

function App() {
  const [messageData, setMessageData] = useState([]);
  const [route, setRoute] = useState("");
  const [requestOption, setRequestOption] = useState({ method: "GET" });
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

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
      method: "GET"
    });
  };

  const searchById = (event) => {
    setRoute(event.target.value);
    setRequestOption({
      method: "GET"
    });
  };

  const deleteMessage = (id) => {
    setRoute(id);
    setRequestOption({
      method: "DELETE"
    });
  };

  const newMessage = (e) => {
    e.preventDefauld();
    setRoute("add");
    setRequestOption({
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        from,
        text,
      }),
    });
  };

  return (
    <div>
      <div className="heading">
        <div>
          <h1>Wellcome to CYF chat app</h1>
        </div>
        <div className="search">
          <div>
            <button onClick={seeLatest}>see latest</button>
            <input placeholder="search by id" onChange={searchById}></input>
          </div>
          <SendMessage
            newMessage={newMessage}
            setFrom={setFrom}
            setText={setText}
          />
        </div>
      </div>
      <div >
        <Messages messageData={messageData} deleteMessage={deleteMessage} />
      </div>
    </div>
  );
}

export default App;
