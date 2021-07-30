import "./App.css";
import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import demmo from "./trainnngRedux/demo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditting: null,
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
  // gọi sau khi refresh website và chỉ được gọi duy nhất một lần
  // componentWillMount
  componentDidMount() {
    if (localStorage && localStorage.getItem("listTask")) {
      const tasks = JSON.parse(localStorage.getItem("listTask"));
      this.setState({
        tasks,
      });
    }
  }
  generateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Học tiếng anh",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Đi nhậu",
        status: false,
      },
    ];
    this.setState({
      tasks,
    });
    localStorage.setItem("listTask", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor(1 + Math.random() * 10000);
  }

  generateID() {
    return this.s4() + this.s4() + "-" + this.s4();
  }

  // handle click add work
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditting !== null) {
      this.setState({
        taskEditting: null,

        isDisplayForm: true,
      });
    } else {
      this.setState({
        taskEditting: null,

        isDisplayForm: !this.state.isDisplayForm,
      });
    }
  };

  handleCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  handleShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  dataAdd = (data) => {
    console.log(data.id);
    let { tasks } = this.state;

    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      tasks.forEach((task, index) => {
        if (task.id === data.id) {
          tasks[index] = data;
        }
      });
      this.setState({
        tasks,
      });
    }

    this.setState({
      tasks,
      taskEditting: null,
    });
    this.handleCloseForm();

    localStorage.setItem("listTask", JSON.stringify(tasks));
  };
  // remove task
  handleDeleteTask = (id) => {
    const { tasks } = this.state;
    const listTask = tasks.filter((task) => {
      return task.id !== id;
    });

    this.setState({
      ...this.state,
      tasks: listTask,
    });
    localStorage.setItem("listTask", JSON.stringify(listTask));
  };

  onUpdateStatus = (value) => {
    // console.log(value);
    const { tasks } = this.state;
    tasks.forEach((task) => {
      if (task.id === value) {
        task.status = !task.status;
      }
    });
    // console.log(tasks);
    this.setState({
      ...this.state,
      tasks,
    });
    localStorage.setItem("listTask", JSON.stringify(tasks));
  };

  // update
  handleUpdate = (id) => {
    const { tasks } = this.state;
    const taskEditting = tasks.find((task) => {
      return task.id === id;
    });
    // localStorage.setItem("taskEditting", JSON.stringify(taskEditting));
    this.setState({
      ...this.state,
      taskEditting,
    });

    this.handleShowForm();
  };
  handleFilter = (data) => {
    this.setState({
      filter: {
        name: data.filterName.toLowerCase(),
        status: data.filterStatus,
      },
    });
  };
  handleSearch = (keySearch) => {
    console.log("key", keySearch);
    const { tasks } = this.state;
    var newTasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keySearch.keyWord) !== -1;
    });
    this.setState({
      tasks: newTasks,
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
    let { tasks, isDisplayForm, taskEditting, filter, sort } = this.state;

    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === Boolean(filter.status);
        }
      });
    }
    if (sort.sortBy === "name") {
      tasks.sort((a, b) => {
        return a.name === b.name
          ? 0
          : a.name > b.name
          ? sort.sortValue
          : -sort.sortValue;
        // if (a.name > b.name) return sort.sortValue;
        // else if (a.name < b.name) return -sort.sortValue;
        // else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        return a.status === b.status
          ? 0
          : a.status > b.status
          ? -sort.sortValue
          : sort.sortValue;
      });
    }

    const elementTaskForm = isDisplayForm ? (
      <TaskForm
        // isDisplayForm={isDisplayForm}
        handleCloseForm={this.handleCloseForm}
        dataAdd={this.dataAdd}
        taskEditting={taskEditting}
      />
    ) : (
      ""
    );
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
              {/* Form */}
              {elementTaskForm}
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
                onClick={this.onToggleForm}
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
                tasks={tasks}
                handleDelete={this.handleDeleteTask}
                onUpdateStatus={this.onUpdateStatus}
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

export default App;
