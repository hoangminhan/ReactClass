import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSearch = () => {
    this.props.handleSearch(this.state);
  };

  render() {
    const { keyWord } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khoá"
            name="keyWord"
            value={keyWord}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSearch}
            >
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
