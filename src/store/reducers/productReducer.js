import produce from "immer";
import { SET_ALL_POKEMON } from "../constants/index";

export const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POKEMON:
        draft.products = action.products;
        break;
      default:
        return state;
    }
  });

export default productReducer;
