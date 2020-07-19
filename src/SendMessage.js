import React from "react";

const SendMessage = (props) => {
  const onchange = (event) => {
    props.setFormData({
      ...props.formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={props.displayForm}>
      <form onSubmit={props.newMessage} className="form-style">
        <formGroup className="formGroup">
        <label>Name</label>
        <input
          placeholder="Your name"
          type="text"
          name="from"
          onChange={onchange}
        ></input>
        message:{" "}
        <input
          placeholder="The message"
          type="text"
          name="text"
          onChange={onchange}
        ></input>
        </formGroup>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => props.setDisplayForm("hide")}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default SendMessage;
