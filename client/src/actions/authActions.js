import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_FAIL,
  GET_ERRORS,
  CLEAR_ERRORS,
} from "../actions/types";
import { returnErrors } from "./errorActions";

//check the token and load the user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//register user
export const register = ({ name, email, password, phone, deliveryAddress }) => (
  dispatch
) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({
    name,
    email,
    password,
    phone,
    deliveryAddress,
  });

  axios
    .post("/api/users", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Logout the user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//setup config headers and token
export const tokenConfig = (getState) => {
  //retreive user from local storage
  const token = getState().auth.token;

  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //if token found, add it to the headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};