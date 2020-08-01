import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import allReducer from "../reducers";

const store = createStore(
  allReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
);

export default store;
