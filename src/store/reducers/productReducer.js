import produce from "immer";
import { SET_ALL_PRODUCT, SET_PRODUCT } from "../constants/index";

export const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_PRODUCT:
        draft.products = action.products;
        break;
      case SET_PRODUCT:
        draft.products = {
          ...state.products,
          products: [action.product, ...state.products.products],
        };
        break;
      default:
        return state;
    }
  });

export default productReducer;
