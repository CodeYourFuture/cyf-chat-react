import React,{ useState } from 'react';

export default function SendMessage ({fetchData}) {
  // function formState(initialValue){
  //   const [value, setValue] = useState(initialValue);
  //   function eventHandle(event){
  //     setValue(event.target.value)
  //   }
  
  //   return [value,eventHandle]
  // }
  
    // const [text, setText] = formState('');
    // const [from, setFrom] = formState('');
    const [text, setText] = useState('');
    const [from, setFrom] = useState('');
    function handleFromInput (event){
      setFrom(event.target.value);
    }
    function handleTextInput(event) {
      setText(event.target.value);
    }
    
    function handleSubmitButton(event) {
      event.preventDefault();
      fetch(`https://gulnihal-node-challange-chat-server.glitch.me/messages`, {
        method: "POST",
        body: JSON.stringify(
          {
            from: from, //from comes from useState
            text: text,
          } //text comes from useState
        ),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => fetchData());
    }
    return (
      <form onSubmit={handleSubmitButton}>
        <input
          type="text"
          name="from"
          value={from}
          placeholder="username"
          onChange={handleFromInput}
        ></input>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="message"
          onChange={handleTextInput}
        ></input>
        <button type="submit"> Submit </button>;
      </form>
    );
}