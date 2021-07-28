import "./App.css";
import Control from "./components/Control";
import TaskListContainer from "./containers/TaskListContainer";

import React, { Component } from "react";
import TaskFormContaier from "./containers/TaskFormContaier";
import { connect } from "react-redux";
import { toggleForm, resetEditTask } from "./actions/index";
import TaskControlContainer from "./containers/TaskControlContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: this.props.tasks.isDisplayForm,
    };
  }

  componentWillReceiveProps(netProps) {
    if (!netProps.tasks.isDisplayForm) {
      this.setState({
        isDisplayForm: false,
      });
    } else {
      this.setState({
        isDisplayForm: true,
      });
    }
  }

  handleToggle = () => {
    if (
      this.props.tasks.isDisplayForm &&
      Object.keys(this.props.taskEdit).length !== 0
    ) {
      debugger;
      this.props.onToggleForm({ isDisplayForm: true });
      this.props.resetEditTask();
    } else {
      this.setState(
        {
          isDisplayForm: !this.state.isDisplayForm,
        },
        () => {
          this.props.onToggleForm(this.state);
          this.props.resetEditTask();
        }
      );
    }
  };

  render() {
    let { isDisplayForm } = this.state;
    console.log(this.props.taskEdit === true ? 1 : 0);
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === false
                ? "hidden-form"
                : "col-xs-4 col-sm-4 col-md-4 col-lg-4"
            }
          >
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  {!(Object.keys(this.props.taskEdit).length === 0)
                    ? "Cập nhập công việc"
                    : "Thêm công việc"}
                </h3>
              </div>

              <TaskFormContaier />
            </div>
          </div>
          <div
            className={
              isDisplayForm === false
                ? "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                : "col-xs-8 col-sm-8 col-md-8 col-lg-8"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleToggle}
            >
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>
            <TaskControlContainer />
            <div className="row mt-15">
              <TaskListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    taskEdit: state.taskEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleForm: (dataToggle) => {
      dispatch(toggleForm(dataToggle));
    },
    resetEditTask: () => {
      dispatch(resetEditTask());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
