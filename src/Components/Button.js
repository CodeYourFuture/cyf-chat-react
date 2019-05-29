import React from "react";

function Button(props) {
  return (
    <button className="btn" style={props.style} onClick={props.onClick}>
      {props.content}
    </button>
  );
}
export default Button;
