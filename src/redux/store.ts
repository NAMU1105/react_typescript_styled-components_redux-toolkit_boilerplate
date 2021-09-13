import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
