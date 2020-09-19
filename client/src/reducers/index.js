import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import menuItemReducer from "./menuItemReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  menuItem: menuItemReducer,
});
