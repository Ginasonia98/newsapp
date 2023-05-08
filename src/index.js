import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsState";
import newsSaga from "./newsSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [saga],
});
saga.run(newsSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
