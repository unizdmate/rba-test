import { combineReducers } from "redux";
import { layoutReducer } from "./Slices/layoutSlice";

export const rootReducer = combineReducers({
  layout: layoutReducer,
});
