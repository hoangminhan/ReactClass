import React, { Component } from "react";

class ControlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: "",
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSearch = () => {
    this.props.onSearchTask(this.state.keySearch);
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            name="keySearch"
            value={this.state.keySearch}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleSearch}
            >
              <span className="fa fa-search mr-5" />
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ControlSearch;
