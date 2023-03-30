import { combineReducers } from "redux";
import invitationReducer from "./invitationReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  invitationReducer: invitationReducer,
  productReducer: productReducer,
});

export default rootReducer;
