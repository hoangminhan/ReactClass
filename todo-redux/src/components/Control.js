import React, { Component } from "react";
import ControlSearch from "./ControlSearch";
import ControlFilter from "./ControlSort";

class Control extends Component {
  render() {
    return <div className="row mt-15">{this.props.children}</div>;
  }
}

export default Control;
