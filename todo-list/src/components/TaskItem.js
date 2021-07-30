import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskItem extends Component {
  // onUpdateStatus = (id) => {
  //   // console.log(id);
  //   this.props.onUpdateStatus(id);
  // };

  // update
  handleUpdate = (task) => {
    // this.props.handleUpdate(id);
    this.props.openForm();
    this.props.editTask(task);
  };
  render() {
    // const { task, index } = this.props;
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
    const { tasks } = this.props;

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
                  onClick={() => this.props.onUpdateStatus(task.id)}
                >
                  {task.status ? "Kích hoạt" : "Ẩn"}
                </span>
              </td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => this.handleUpdate(task)}
                >
                  <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.handleDelete(task.id)}
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
// chuyển các state của store thành props của component  TaskItem
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleDelete: (id) => {
      dispatch(actions.removeTask(id));
    },
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    openForm: () => {
      dispatch(actions.openForm());
    },
    editTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
