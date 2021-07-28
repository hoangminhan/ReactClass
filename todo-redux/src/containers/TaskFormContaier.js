import React, { Component } from "react";
import TaskForm from "../components/TaskForm";
import { addTask, toggleForm } from "./../actions/index";
import { connect } from "react-redux";

class TaskFormContaier extends Component {
  render() {
    return (
      <TaskForm
        handleAddTask={this.props.handleAddTask}
        onToggleForm={this.props.onToggleForm}
        taskEditting={this.props.taskEditting}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taskEditting: state.taskEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTask: (task) => {
      dispatch(addTask(task));
    },

    onToggleForm: (dataToggle) => {
      dispatch(toggleForm(dataToggle));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContaier);
