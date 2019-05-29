import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
class Compose extends React.Component {
  state = { messageToSend: "", emojes: "", emojesShowed: false };
  sendMessage = event => {
    this.props.submitMessage(this.state.messageToSend);
    event.preventDefault();
    this.setState({ messageToSend: "" });
  };

  addEmoji = e => {
    console.log(e);

    console.log("Emoje icon", "0x" + e.unified);
    if (e.unified.length <= 5) {
      let emojiPic = String.fromCodePoint(`0x${e.unified}`);
      this.setState({
        messageToSend: this.state.messageToSend + emojiPic,
        emojes: "",
        emojesShowed: false
      });
    } else {
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach(el => codesArray.push("0x" + el));
      console.log(codesArray.length);
      console.log(codesArray); // ["0x1f3f3", "0xfe0f"]
      let emojiPic = String.fromCodePoint(...codesArray);
      this.setState({
        messageToSend: this.state.messageToSend + emojiPic,
        emojes: "",
        emojesShowed: false
      });
    }
  };
  //
  showEmojes = () => {
    const allEmojes = (
      <span>
        <Picker onSelect={this.addEmoji} />
      </span>
    );
    if (!this.state.emojesShowed) {
      this.setState(prevState => {
        return { emojes: allEmojes, emojesShowed: !prevState.emojesShowed };
      });
    } else {
      this.setState(prevState => {
        return { emojes: "", emojesShowed: !prevState.emojesShowed };
      });
    }
  };

  render() {
    return (
      <div>
        <form class="conversation-compose">
          <div class="emoji" onClick={this.showEmojes}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="smiley"
              x="3147"
              y="3209"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                fill="#7d8489"
              />
            </svg>
          </div>
          <input
            class="input-msg"
            name="input"
            placeholder="Type a mes.."
            autocomplete="off"
            autofocus
            onChange={e =>
              this.setState({ messageToSend: e.currentTarget.value })
            }
            value={this.state.messageToSend}
          />
          <button onClick={this.sendMessage} class="send">
            <div class="circle">
              <i class="zmdi zmdi-mic" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
            </div>
          </button>
        </form>
        {this.state.emojes}
      </div>
    );
  }
}

export default Compose;
