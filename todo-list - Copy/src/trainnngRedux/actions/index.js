import * as types from "../constants/ActionType";
export const toggle = () => {
  return {
    type: types.TOGGLE_STATUS,
  };
};
export const sort = (sort) => {
  return {
    type: types.SORT,
    sort: sort,
  };
};
