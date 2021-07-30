import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPassword: "",
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
  handleSubmit = (event) => {
    event.preventDefault();
    const { txtName, txtPassword } = this.state;
    if (txtName === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "dataLogin",
        JSON.stringify({
          userName: txtName,
          password: txtPassword,
        })
      );
    }
    this.setState({
      ...this.state,
    });
  };

  render() {
    const { txtName, txtPassword } = this.state;
    const dataLogin = JSON.parse(localStorage.getItem("dataLogin"));
    if (dataLogin) {
      return <Redirect to="/products" />;
    }
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.handleSubmit}>
            <legend>Form Log in</legend>

            <div className="form-group">
              <label for="">UserName</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
                name="txtName"
                value={this.state.txtName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="">Password</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
                name="txtPassword"
                value={this.state.txtPassword}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
