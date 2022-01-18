import { combineReducers } from "redux";
import { layoutReducer } from "./Slices/layoutSlice";
import { checkingAccountReducer } from "./Slices/checkingAccountSlice";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  checkingAccount: checkingAccountReducer,
});
