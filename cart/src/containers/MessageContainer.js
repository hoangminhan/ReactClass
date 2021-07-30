import React, { Component } from "react";

import { connect } from "react-redux";
import Message from "../components/Message";

class MessageContainer extends Component {
  render() {
    return <Message message={this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, null)(MessageContainer);
