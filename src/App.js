import React from 'react';
import './App.css';
import SetApi from "./Components/Setapi";
import Messages from "./Components/Messages";
function App() {
  return (
    <div className="App">
      <div className="App positioner">
        <SetApi />
        <Messages />
      </div>
    </div>
  );
}

export default App;
