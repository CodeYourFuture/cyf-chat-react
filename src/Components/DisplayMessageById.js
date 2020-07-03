import React, { Component } from "react";
import Button from "./Button.js";
export default class DisplayMessageById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.displayMessageById(this.state.id);
    this.setState({ id: "" });
  };
  render() {
    return (
      <div className="App">
        <input
          style={{ width: "90px", textAlign: "center" }}
          onChange={this.handleChange}
          placeholder="Id"
          value={this.state.id}
        />
        <Button
          onClick={this.handleSubmit}
          style={{ cursor: "pointer", background: "#fab95b" }}
          content="Display by Id"
        />
      </div>
    );
  }
}
