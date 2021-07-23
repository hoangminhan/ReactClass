import React, { Component } from "react";

class TaskItem extends Component {
  handleDelete = (id) => {
    this.props.handleDeleteTask(id);
  };

  onUpdateStatus = (id) => {
    // console.log(id);
    this.props.onUpdateStatus(id);
  };

  // update
  handleUpdate = (id) => {
    this.props.handleUpdate(id);
  };
  render() {
    // const { task, index } = this.props;
    const { tasks } = this.props;
    // console.log(task.status);

    {
      /* <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-danger" : "label label-success"
            }
          >
            {task.status === true ? "Kích hoạt" : "Ẩn"}
          </span>
        </td> */
    }

    return (
      <>
        {tasks.map((task, index) => {
          return (
            <tr key={index}>
              {" "}
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td className="text-center">
                <span
                  className={
                    task.status ? "label label-danger" : "label label-success"
                  }
                  onClick={() => this.onUpdateStatus(task.id)}
                >
                  {task.status ? "Kích hoạt" : "Ẩn"}
                </span>
              </td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => this.handleUpdate(task.id)}
                >
                  <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(task.id)}
                >
                  <span className="fa fa-trash mr-5"></span>
                  Xóa
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

export default TaskItem;
