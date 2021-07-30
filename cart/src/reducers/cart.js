import * as types from "./../constants/ActionType";
let initialState = JSON.parse(localStorage.getItem("cartList")) || [];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const index = state.findIndex(
        (item) => item.product.id === action.product.id
      );
      if (index === -1) {
        const data = [
          ...state,
          ...[
            {
              product: action.product,
              quantity: action.quantity,
            },
          ],
        ];
        state = data;
      } else {
        state[index].quantity += 1;
      }
      localStorage.setItem("cartList", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT:
      let indexProduct = state.findIndex(
        (item) => item.product.id === action.id
      );
      const newState = [...state];
      if (indexProduct !== -1) {
        newState.splice(indexProduct, 1);
      }
      state = newState;
      localStorage.setItem("cartList", JSON.stringify(state));
      return [...state];
    case types.DELETE_ONE_CART:
      const { id } = action;
      let newStates = [...state];
      let indexCart = newStates.findIndex((item) => item.product.id === id);
      if (indexCart !== -1) {
        if (newStates[indexCart].quantity > 1) {
          newStates[indexCart].quantity--;
        } else {
          newStates.splice(indexCart, 1);
        }
        console.log("newStae", newStates);
      }
      state = newStates;
      localStorage.setItem("cartList", JSON.stringify(state));
      return state;
    case types.ADD_ONE_CART:
      const dataState = [...state];
      let indexCartAdd = dataState.findIndex(
        (item) => item.product.id === action.id
      );
      if (indexCartAdd !== -1) {
        dataState[indexCartAdd].quantity++;
      }
      state = dataState;
      localStorage.setItem("cartList", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default cart;
