import React, { Component } from "react";

export default class UpdateMessage extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      text: ""
    };
  }
  componentDidMount() {
    this.setState({
      from: this.props.msgToUpdate.from,
      text: this.props.msgToUpdate.text
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateMessage(this.state);
    // this.setState({ from: "", text: "" });
  };

  render() {
    // console.log(this.props.msgToUpdate);
    return (
      <div style={divStyle}>
        <h2 style={{ margin: "0" }}>Edit a message</h2>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <p style={paraStyle}>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="from"
                value={this.state.from}
              />
            </div>
            <div style={padding}>
              <input
                onChange={this.handleChange}
                type="text"
                name="text"
                value={this.state.text}
              />
            </div>
          </p>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

const divStyle = {
  display: `flex`,
  flexDirection: "column",
  alignItems: "center",
  margin: "10px 0",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px 0"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const paraStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const padding = { padding: "5px" };
