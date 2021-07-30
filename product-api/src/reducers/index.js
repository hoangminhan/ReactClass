import { combineReducers } from "redux";
import products from "./productReducer";
import productEdit from "./productEditReducer";
const rootReducer = combineReducers({
  products,
  productEdit,
});
export default rootReducer;
