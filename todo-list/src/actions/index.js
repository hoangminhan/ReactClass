import * as types from "../constants/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};
export const removeTask = (id) => {
  return {
    type: types.REMOVE_TASK,
    id,
  };
};
export const searchTask = (name) => {
  return {
    type: types.SEARCH_TASK,
    name,
  };
};
export const filterTask = (dataFilter) => {
  return {
    type: types.FILTER_TASK,
    dataFilter,
  };
};
export const sortTask = (dataSort) => {
  return {
    type: types.SORT_TASK,
    dataSort,
  };
};
export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};

export const onToggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};
export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id,
  };
};
