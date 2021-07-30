import * as types from "../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

const s4 = () => {
  return Math.floor(1 + Math.random() * 10000);
};

const randomID = () => {
  return s4() + s4() + "-" + s4();
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      if (action.task.id === "") {
        console.log("1");
        const data = {
          id: randomID(),
          name: action.task.name,
          status: action.task.status,
        };
        state.push(data);
        localStorage.setItem("tasks", JSON.stringify(state));
        return [...state];
      } else {
        const data = [...state];
        data.forEach((task, index) => {
          if (task.id === action.task.id) {
            data[index] = action.task;
          }
        });
        state = data;
        localStorage.setItem("tasks", JSON.stringify(state));

        return state;
      }

    case types.REMOVE_TASK:
      console.log(action.id);
      let listTask = state.filter((task) => {
        return action.id !== task.id;
      });
      console.log(listTask);
      state = listTask;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    case types.SEARCH_TASK:
      state = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = [...state];
      const data = newTasks.filter((task, index) => {
        console.log("task", task);
        console.log(
          "task",
          task.name.toLowerCase().indexOf(action.name.keyword)
        );
        return task.name.toLowerCase().indexOf(action.name.keyWord) !== -1;
      });
      state = data;
      return state;
    case types.FILTER_TASK:
      debugger;
      state = JSON.parse(localStorage.getItem("tasks"));

      if (action.dataFilter.filterName) {
        state = state.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(action.dataFilter.filterName) !== -1
          );
        });
      }
      state = state.filter((task) => {
        return action.dataFilter.filterStatus === -1
          ? task
          : action.dataFilter.filterStatus === 1
          ? task.status === true
          : task.status === false;
      });
      return state;

    case types.SORT_TASK:
      console.log(action.dataSort);
      state = JSON.parse(localStorage.getItem("tasks"));

      if (action.dataSort.by === "name") {
        state.sort((a, b) => {
          return a.name === b.name
            ? 0
            : a.name > b.name
            ? action.dataSort.value
            : -action.dataSort.value;
        });
      }
      state.sort((a, b) => {
        return a.status === b.status
          ? 0
          : a.status > b.status
          ? -action.dataSort.value
          : action.dataSort.value;
      });
      return state;

    case types.UPDATE_STATUS_TASK:
      console.log(action.id);
      let tasks = [...state];
      tasks.forEach((task, index) => {
        if (task.id === action.id) {
          return (tasks[index].status = !tasks[index].status);
        }
      });
      state = tasks;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
export default myReducer;
