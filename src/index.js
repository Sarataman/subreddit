import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";


import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
     promiseInProgress && 
     <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
   >
     <Loader type="ThreeDots" color="#2BAD60" height="150" width="150" />
   </div>
  )
};

ReactDOM.render(
  <Provider store={store}>
    <App />
    <LoadingIndicator/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
