import React from "react";

const FormMessages = ({ handleOnChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        onChange={handleOnChange}
        name="from"
      ></input>
      <textarea
        type="text"
        placeholder="Enter message here..."
        rows="6"
        cols="5"
        onChange={handleOnChange}
        name="text"
        wrap="hard"
      ></textarea>
      <button>Send</button>
    </form>
  );
};

export default FormMessages;
