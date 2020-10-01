import axios from "axios";
import { GET_CART, ADD_CART, DELETE_CART, CART_LOADING } from "./types";
import { tokenConfig } from "./authActions"; //setup config headers and token
import { returnErrors } from "./errorActions";
//jwt decode needed to get user id from email
import jwt_decode from "jwt-decode";

//RETRIEVE cart items from the api
// export const getCart = () => (dispatch) => {
//   dispatch(setCartLoading());
//   axios
//     .get("/api/cart")
//     .then((res) =>
//       dispatch({
//         type: GET_CART,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

export const getCart = () => (dispatch, getState) => {
  //get user id from localStorage
  var decoded = "";
  var userId = "";
  if (localStorage.token != null) {
    decoded = jwt_decode(localStorage.token);
    userId = decoded.id;
    // console.log("found id: ", userId);
  } else {
    // console.log("id not found");
  }
  dispatch(setCartLoading());
  // console.log("user", localStorage.token);

  getItems();
  async function getItems() {
    const data = axios
      .get("/api/cart/" + userId, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: GET_CART,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    return data;
  }
};

//ADD item to Cart through the api
export const addCart = (cart) => (dispatch, getState) => {
  dispatch(setCartLoading());
  axios
    .post("/api/cart", cart, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_CART,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE cart item from the api
export const deleteCart = (id) => (dispatch, getState) => {
  dispatch(setCartLoading());
  axios
    .delete(`/api/cart/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_CART,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//LOADING while waiting for response from API
export const setCartLoading = () => {
  return {
    type: CART_LOADING,
  };
};
