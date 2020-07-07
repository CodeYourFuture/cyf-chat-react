import React from "react";

const FormMessages = ({ handleOnChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-post">
      <input
        type="text"
        placeholder="Your Name"
        onChange={handleOnChange}
        name="from"
      />
      <textarea
        type="text"
        placeholder="Enter message here..."
        rows="6"
        cols="5"
        onChange={handleOnChange}
        name="text"
        wrap="hard"
      />
      <button className="sendBtn">Send</button>
    </form>
  );
};

export default FormMessages;
