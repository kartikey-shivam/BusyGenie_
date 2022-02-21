import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import Reducer from "./store/reducer";
import store from "./store/store";
import SettingsContextProvider from "./pomodoro/context/SettingsContext";

// const store = createStore(Reducer);
ReactDOM.render(
  <Provider store={store}>
    <SettingsContextProvider>
      {" "}
      <App />{" "}
    </SettingsContextProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
