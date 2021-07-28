import React, { Component } from "react";
import Control from "../components/Control";
import ControlSearch from "../components/ControlSearch";
import ControlFilter from "../components/ControlSort";
import { connect } from "react-redux";
import { searchTask, sortTask } from "./../actions/index";

class TaskControlContainer extends Component {
  render() {
    return (
      <Control>
        <ControlSearch onSearchTask={this.props.onSearchTask} />
        <ControlFilter onSortTask={this.props.onSortTask} />
      </Control>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTask: (nameTask) => {
      dispatch(searchTask(nameTask));
    },
    onSortTask: (dataSort) => {
      dispatch(sortTask(dataSort));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskControlContainer);
