import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div className="row">
        <Search handleSearch={this.props.handleSearch} />
        <Sort handleSort={this.props.handleSort} />
      </div>
    );
  }
}

export default Control;
