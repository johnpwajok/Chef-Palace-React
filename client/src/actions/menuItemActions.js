import axios from "axios";
import {
  GET_MENUITEMS,
  ADD_MENUITEM,
  DELETE_MENUITEM,
  MENUITEMS_LOADING,
} from "./types";
import { tokenConfig } from "./authActions"; //setup config headers and token
import { returnErrors } from "./errorActions";

//RETRIEVE menu items from the api
export const getMenuItems = () => (dispatch) => {
  dispatch(setMenuItemsLoading());
  axios
    .get("/api/menuItems")
    .then((res) =>
      dispatch({
        type: GET_MENUITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//Add and Delete to be accessible by admin account only
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//ADD menu items through the api
export const addMenuItem = (menuItem) => (dispatch, getState) => {
  dispatch(setMenuItemsLoading());
  axios
    .post("/api/menuItems", menuItem, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_MENUITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE menu item from the api
export const deleteMenuItem = (id) => (dispatch, getState) => {
  dispatch(setMenuItemsLoading());
  axios
    .delete(`/api/menuItems/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_MENUITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//LOADING while waiting for response from API
export const setMenuItemsLoading = () => {
  return {
    type: MENUITEMS_LOADING,
  };
};
