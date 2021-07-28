import * as types from "./../constant/actionType";

export const renderTask = (tasks) => {
  return {
    type: types.LIST_TASK,
    tasks,
  };
};
export const addTask = (tasks) => {
  return {
    type: types.ADD_TASK,
    tasks,
  };
};
export const deleteTask = (task) => {
  return {
    type: types.DELETE_TASK,
    task,
  };
};
export const searchTask = (nameTask) => {
  return {
    type: types.SEARCH_TASK,
    nameTask,
  };
};
export const sortTask = (dataSort) => {
  return {
    type: types.SORT_TASK,
    dataSort,
  };
};
export const searchTaskTable = (nameTask) => {
  return {
    type: types.SEARCH_TASK_TABLE,
    nameTask,
  };
};
export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};
export const resetEditTask = () => {
  return {
    type: types.RESET_EDIT_TASK,
  };
};
export const toggleForm = (dataToggle) => {
  return {
    type: types.TOGGLE_FORM,
    dataToggle,
  };
};
export const toggleStatus = (dataToggle) => {
  return {
    type: types.TOGGLE_STATUS,
    dataToggle,
  };
};
