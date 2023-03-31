import produce from "immer";
import { SET_USER } from "../constants/index";

export const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER:
        localStorage.setItem("userProfile", JSON.stringify(action.user));
        draft.user = action.user;
        break;
      default:
        return state;
    }
  });

export default userReducer;
