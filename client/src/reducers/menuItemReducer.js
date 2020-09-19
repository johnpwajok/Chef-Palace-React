import {
  GET_MENUITEMS,
  ADD_MENUITEM,
  DELETE_MENUITEM,
  MENUITEMS_LOADING,
} from "../actions/types";

const initialState = {
  menuItems: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENUITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MENUITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_MENUITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case DELETE_MENUITEM:
      return {
        ...state,
        irems: state.irems.filter((item) => item._id !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
}
