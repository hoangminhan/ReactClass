import React, { Component } from "react";

class TaskItem extends Component {
  handleDelete = (id) => {
    this.props.handleDeleteTask(id);
  };
  handleUpdate = (task) => {
    this.props.handleEditTask(task);
    this.props.onToggleForm({ isDisplayForm: true });
  };
  handleToggleStatus = (task) => {
    this.props.onToggleStatus(task);
  };
  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-success" : "label label-warning"
            }
            onClick={() => {
              this.handleToggleStatus(task);
            }}
          >
            {task.status ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.handleUpdate(task)}
          >
            <span className="fa fa-pencil mr-5" />
            Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDelete(task.id)}
          >
            <span className="fa fa-trash mr-5" />
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
