import React, { Component } from "react";

class ControlFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      by: "name",
      value: 1,
    };
  }
  handleSort = (by, value) => {
    this.setState(
      {
        by,
        value,
      },
      () => {
        this.props.onSortTask(this.state);
      }
    );
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li
              onClick={() => {
                this.handleSort("name", 1);
              }}
            >
              <a role="button">
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={() => this.handleSort("name", -1)}>
              <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a role="button">Trạng Thái Kích Hoạt</a>
            </li>
            <li>
              <a role="button">Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ControlFilter;
