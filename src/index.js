import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import Team from "./Team";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Team />
  </Provider>,
  rootElement
);
