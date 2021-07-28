import * as types from "./../constant/actionType";

const randomId = () => {
  return (
    Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 1000)
  );
};
let initialState = JSON.parse(localStorage.getItem("tasks")) || {
  tasks: [],
  isDisplayForm: false,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_TASK:
      return state;
    case types.ADD_TASK:
      if (action.tasks.id) {
        let checkIndex = state.tasks.findIndex(
          (item) => item.id === action.tasks.id
        );
        const newDataState = { ...state };
        newDataState.tasks[checkIndex] = action.tasks;

        state = newDataState;
      } else {
        const newState = { ...state };
        const data = {
          id: randomId(),
          name: action.tasks.name,
          status: action.tasks.status,
        };
        //   tasks.push(data);
        newState.tasks.push(data);
        console.log("newState", newState);
        console.log(state);

        state = newState;
      }
      localStorage.setItem("tasks", JSON.stringify(state));

      return state;
    case types.TOGGLE_FORM:
      const newStatus = { ...state };
      newStatus.isDisplayForm = action.dataToggle.isDisplayForm;
      state = newStatus;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    case types.DELETE_TASK:
      debugger;
      let index = state.tasks.findIndex((item) => {
        return item.id === action.task;
      });
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return { ...state };
    case types.TOGGLE_STATUS:
      let checkStatus = state.tasks.findIndex(
        (item) => item.id === action.dataToggle.id
      );
      const newDataStatus = { ...state };
      newDataStatus.tasks[checkStatus].status =
        !newDataStatus.tasks[checkStatus].status;

      state = newDataStatus;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    case types.SEARCH_TASK:
      state = JSON.parse(localStorage.getItem("tasks"));

      debugger;
      console.log("search", action);
      const dataSearch = state.tasks.filter((item) => {
        return item.name.toLowerCase().indexOf(action.nameTask) !== -1;
      });

      return { ...state, tasks: dataSearch };
    case types.SEARCH_TASK_TABLE:
      state = JSON.parse(localStorage.getItem("tasks"));
      console.log("search table", action);
      let resultSearch;
      if (action.nameTask.search) {
        resultSearch = state.tasks.filter((item) => {
          return item.name.toLowerCase().indexOf(action.nameTask.search) !== -1;
        });
        console.log(resultSearch);
        state.tasks = [...resultSearch];
      }
      resultSearch = state.tasks.filter((item) => {
        return action.nameTask.value === -1
          ? item
          : action.nameTask.value === 1
          ? item.status === true
          : item.status === false;
      });
      state.tasks = [...resultSearch];

      return { ...state, tasks: resultSearch };
    case types.SORT_TASK:
      console.log(action);
      const sortTask = state.tasks.sort((a, b) => {
        return a.name === b.name
          ? 0
          : a.name > b.name
          ? action.dataSort.value
          : -action.dataSort.value;
      });
      console.log("sort");
      return { ...state, tasks: sortTask };
    default:
      return state;
  }
};
export default myReducer;
