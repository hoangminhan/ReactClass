import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  // componentWillMount() {
  //   // const task = JSON.parse(localStorage.getItem("taskEditting"));
  //   // console.log(task);
  //   if (this.props.taskEditting) {
  //     this.setState({
  //       id: this.props.taskEditting.id,
  //       name: this.props.taskEditting.name,
  //       status: this.props.taskEditting.status,
  //     });
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.taskEditting.isEditting === false) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    } else if (nextProps && nextProps.taskEditting) {
      this.setState({
        id: nextProps.taskEditting.task.id,
        name: nextProps.taskEditting.task.name,
        status: nextProps.taskEditting.task.status,
      });
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handeResetForm = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    this.props.onAdd(this.state);
    this.handeResetForm();
    this.props.closeForm();
  };

  render() {
    const { id, name, status } = this.state;
    return this.props.isDisplayForm ? (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            {!this.props.taskEditting.isEditting
              ? "Thêm công việc"
              : "Cập nhập công việc"}
          </h3>
          <span
            className="fas fa-times icon-time"
            onClick={() => this.props.closeForm()}
          ></span>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Tên</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <label>Trạng thái:</label>

            <select
              name="status"
              id="input"
              className="form-control"
              required="required"
              value={status}
              defaultValue={false}
              onChange={this.handleChange}
            >
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select>

            <button type="submit" className="btn btn-primary">
              Lưu lại
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handeResetForm}
            >
              Huỷ bỏ
            </button>
          </form>
        </div>
      </div>
    ) : (
      ""
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditting: state.taskEdtting,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAdd: (task) => {
      dispatch(actions.addTask(task));
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
