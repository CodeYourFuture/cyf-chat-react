import React, { Component } from "react";
import Button from "./Button.js";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form
        style={{ display: "flex", marginTop: "10px" }}
        onSubmit={this.handleSubmit}
      >
        <input
          placeholder="keyword "
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button handleClick={this.handleSubmit} content="search" />
      </form>
    );
  }
}
