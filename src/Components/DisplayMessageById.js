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
        <Button
          onClick={this.handleSubmit}
          style={{ cursor: "pointer" }}
          content="Display by Id"
        />
        <input
          style={{ width: "30px" }}
          onChange={this.handleChange}
          placeholder="Id"
          value={this.state.id}
        />
      </div>
    );
  }
}
