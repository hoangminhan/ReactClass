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
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value =
      name === "status"
        ? target.value === "true"
          ? true
          : false
        : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {}
    );
  };
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.taskEditting).length === 0) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    } else if (nextProps.taskEditting) {
      console.log(",net", nextProps);
      this.setState({
        id: nextProps.taskEditting.id,
        name: nextProps.taskEditting.name,
        status: nextProps.taskEditting.status,
      });
    }
  }
  handleReset = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    await this.props.handleAddTask(this.state);

    await this.setState({
      name: "",
      status: false,
    });
    await this.props.onToggleForm({ isDisplayForm: false });
  };

  render() {
    let { name, status } = this.state;
    return (
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={status}
            onChange={this.handleChange}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Thêm
            </button>
            &nbsp;
            <button
              type="reset"
              className="btn btn-danger"
              onClick={this.handleReset}
            >
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
