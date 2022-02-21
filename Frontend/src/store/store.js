import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { customReducer } from "./reducer";
import authReducer from "./../features/auth/authSlice";
import ReduxThunk from "redux-thunk";
export const store = configureStore(
  {
    reducer: {
      custom: customReducer,
      auth: authReducer,
    },
  },
  applyMiddleware(ReduxThunk)
);

export default store;
