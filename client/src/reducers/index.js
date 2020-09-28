import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import menuItemReducer from "./menuItemReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  menuItem: menuItemReducer,
  cartItem: cartReducer,
});
