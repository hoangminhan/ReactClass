import React, { Component } from "react";

class Message extends Component {
  render() {
    const { message } = this.props;
    console.log(message);
    return (
      <h3>
        <span className="badge amber darken-2">{message.message}</span>
      </h3>
    );
  }
}

export default Message;
