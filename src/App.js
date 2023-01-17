import React from 'react';
import './App.css';
import ChatMessages from './ChatMessages';

function App() {

  return (
    <div className='App'>
      <h1 className="display-5 mt-3">Chat Messages</h1>
      <ChatMessages />
    </div>
  );
}

export default App;
