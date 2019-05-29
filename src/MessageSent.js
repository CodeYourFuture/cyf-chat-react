import React from "react";

class MessageSent extends React.Component {
  deleteMessageHandler = () => {
    this.props.deleteMessage(this.props.messageID);
    console.log("Hi from senMessage event handler");
  };
  onclickMessage = () => {
    alert("hello");
  };
  render() {
    return (
      <div className="message sent">
        {"You"} <br />
        {this.props.text}
        <span className="metadata">
          <span className="time">{this.props.messageTime}</span>
          <span onClick={this.deleteMessageHandler}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </span>
          <span className="tick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              id="msg-dblcheck-ack"
              x="2063"
              y="2076"
            >
              <path
                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                fill="#4fc3f7"
              />
            </svg>
          </span>
        </span>
      </div>
    );
  }
}
export default MessageSent;
