import "./App.css";
import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: "",
        status: -1,
      },
      keyWord: "",
      sort: {
        sortBy: "name",
        sortValue: 1,
      },
    };
  }

  // handle click add work
  onToggleForm = (isEditting) => {
    if (isEditting === true && this.props.taskEditting.task) {
      this.props.openForm();
      this.props.editTask(false);
    } else {
      isEditting = false;
      this.props.onToggleForm();
      this.props.editTask(isEditting);
    }
  };

  handleShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  handleSort = (data) => {
    console.log(data);
    this.setState(
      {
        sort: {
          sortBy: data.by,
          sortValue: data.value,
        },
      },
      () => {
        console.log(this.state.sort);
      }
    );
  };

  render() {
    const isEditting = this.props.taskEditting.isEditting;
    let { filter, sort } = this.state;
    let { isDisplayForm } = this.props;

    // if (sort.sortBy === "name") {
    //   tasks.sort((a, b) => {
    //     return a.name === b.name
    //       ? 0
    //       : a.name > b.name
    //       ? sort.sortValue
    //       : -sort.sortValue;
    //     // if (a.name > b.name) return sort.sortValue;
    //     // else if (a.name < b.name) return -sort.sortValue;
    //     // else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     return a.status === b.status
    //       ? 0
    //       : a.status > b.status
    //       ? -sort.sortValue
    //       : sort.sortValue;
    //   });
    // }

    return (
      <div>
        <div className="container">
          <div className="heading-title">
            <h1>Quản lý công việc</h1>
          </div>

          <div className="row">
            <div
              className={
                isDisplayForm
                  ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  : "col-xs-0 col-sm-0 col-md-0 col-lg-0"
              }
            >
              <TaskForm />
            </div>

            <div
              className={
                isDisplayForm
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.onToggleForm(isEditting)}
              >
                <span className="fas fa-plus"></span>
                Thêm công việc
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.generateData}
              >
                <span className="fas fa-plus"></span>
                Generate Data
              </button>

              {/* Search -sort*/}
              <Control
                handleSearch={this.handleSearch}
                handleSort={this.handleSort}
              />
              <TaskList
                handleUpdate={this.handleUpdate}
                handleFilter={this.handleFilter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditting: state.taskEdtting,
  };
};
const mapDispatchToProps = (dispatch, action) => {
  return {
    onToggleForm: () => {
      dispatch(actions.onToggleForm());
    },
    openForm: () => {
      dispatch(actions.openForm());
    },
    editTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
