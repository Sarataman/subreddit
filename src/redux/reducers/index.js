import { combineReducers } from "redux";
import { searchPost } from "./search";

const allReducer = combineReducers({
  searchPost,
});

export default allReducer;
