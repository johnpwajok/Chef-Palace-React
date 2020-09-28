import {
  GET_CART,
  ADD_CART,
  DELETE_CART,
  CART_LOADING,
} from "../actions/types";

const initialState = {
  cartItems: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CART:
      console.log("in reduce function");
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    //{
    //   ...state,
    //   items: action.payload,
    //   loading: false,
    // };
    case ADD_CART:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case DELETE_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
}
