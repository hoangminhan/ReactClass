import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      by: "name",
      value: 1,
    };
  }

  handeClick = (sortBy, value) => {
    this.setState(
      {
        by: sortBy,
        value: value,
      },
      () => {
        this.props.handleSort(this.state);
      }
    );
  };
  render() {
    const { by, value } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li
              onClick={() => {
                this.handeClick("name", 1);
              }}
            >
              <a role="button">
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z </span>
                {by === "name" && value === 1 ? (
                  <span class="fas fa-check"></span>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li
              onClick={() => {
                this.handeClick("name", -1);
              }}
            >
              <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
                {by === "name" && value === -1 ? (
                  <span class="fas fa-check"></span>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li
              onClick={() => {
                this.handeClick("status", 1);
              }}
            >
              <a role="button">
                Trạng Thái Kích Hoạt{" "}
                {by === "status" && value === 1 ? (
                  <span class="fas fa-check"></span>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li
              onClick={() => {
                this.handeClick("status", -1);
              }}
            >
              <a role="button">
                Trạng Thái Ẩn{" "}
                {by === "status" && value === -1 ? (
                  <span class="fas fa-check"></span>
                ) : (
                  ""
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
