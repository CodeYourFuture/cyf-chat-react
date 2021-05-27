import React from 'react';
import './App.css';
import SetApi from "./Components/Setapi";
import Messages from "./Components/Messages";
import ChatFormContainer from "./Components/ChatFormContainer"
function App() {
  return (
    <div className="App">
      <div className="App positioner">
        <SetApi />
        <Messages />
        <ChatFormContainer />
      </div>
    </div>
  );
}

export default App;
