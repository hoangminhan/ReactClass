import React, { Component } from "react";
import TaskItem from "./TaskItem";
import * as actions from "./../actions/index";
import { connect } from "react-redux";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  handleChange = async (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === "filterStatus" ? +target.value : target.value;

    await this.setState({
      [name]: value,
    });

    await this.props.filterTask(this.state);
  };
  render() {
    const { tasks } = this.props;
    const { filterName, filterStatus } = this.state;

    return (
      <div className="row mt-15">
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
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={filterName}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.handleChange}
                  >
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              <TaskItem />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    filterTask: (dataFilter) => {
      dispatch(actions.filterTask(dataFilter));
    },
  };
};

export default connect(null, mapDispatchToProps)(TaskList);
