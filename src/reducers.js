import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
