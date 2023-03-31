import { combineReducers } from "redux";
import invitationReducer from "./invitationReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  invitationReducer: invitationReducer,
  productReducer: productReducer,
  userReducer: userReducer,
});

export default rootReducer;
