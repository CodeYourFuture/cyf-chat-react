import React from "react";

function DisplayMessageById(props) {
  return (
    <input
      className="App"
      onChange={props.displayMessageById}
      placeholder="Display message by Id"
    />
  );
}

export default DisplayMessageById;
