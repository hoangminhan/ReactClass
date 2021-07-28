import React, { Component } from "react";
import TaskList from "../components/TaskList";
import { connect } from "react-redux";
import TaskItem from "../components/TaskItem";
import {
  deleteTask,
  editTask,
  toggleForm,
  toggleStatus,
  searchTaskTable,
} from "../actions/index";

class TaskListContainer extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <TaskList
        tasks={tasks.tasks}
        onSearchTaskTable={this.props.onSearchTaskTable}
      >
        {tasks.tasks.map((task, index) => {
          return (
            <TaskItem
              task={task}
              index={index}
              key={index}
              handleDeleteTask={this.props.handleDeleteTask}
              handleEditTask={this.props.handleEditTask}
              onToggleForm={this.props.onToggleForm}
              onToggleStatus={this.props.onToggleStatus}
            />
          );
        })}
      </TaskList>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteTask: (task) => {
      dispatch(deleteTask(task));
    },
    handleEditTask: (task) => {
      dispatch(editTask(task));
    },
    onToggleForm: (dataToggle) => {
      dispatch(toggleForm(dataToggle));
    },
    onToggleStatus: (dataToggle) => {
      dispatch(toggleStatus(dataToggle));
    },
    onSearchTaskTable: (nameTask) => {
      dispatch(searchTaskTable(nameTask));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
