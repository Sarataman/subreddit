import { combineReducers } from "redux";
import { search } from "./search";

const allReducer = combineReducers({
  search,
});

export default allReducer;
