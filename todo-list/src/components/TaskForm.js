import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentWillMount() {
    // const task = JSON.parse(localStorage.getItem("taskEditting"));
    // console.log(task);
    if (this.props.taskEditting) {
      this.setState({
        id: this.props.taskEditting.id,
        name: this.props.taskEditting.name,
        status: this.props.taskEditting.status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskEditting) {
      this.setState({
        id: nextProps.taskEditting.id,
        name: nextProps.taskEditting.name,
        status: nextProps.taskEditting.status,
      });
    } else if (!nextProps.taskEditting) {
      this.setState({
        id: "",
        name: "",
        status: false,
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
    this.setState({
      [name]: value,
    });
  };
  handeResetForm = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dataAdd(this.state);

    this.handeResetForm();
  };
  onCloseForm = () => {
    this.props.handleCloseForm();
  };
  render() {
    const { id } = this.state;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Cập nhập công việc" : "Thêm công việc"}
          </h3>
          <span
            className="fas fa-times icon-time"
            onClick={this.onCloseForm}
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
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <label>Trạng thái:</label>

            <select
              name="status"
              id="input"
              className="form-control"
              required="required"
              value={this.state.status}
              // defaultValue={true}
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
    );
  }
}

export default TaskForm;
