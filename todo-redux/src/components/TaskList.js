import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: -1,
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === "value" ? +target.value : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onSearchTaskTable(this.state);
      }
    );
  };

  render() {
    const { onSearchTaskTable } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  name="value"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td />
            </tr>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
