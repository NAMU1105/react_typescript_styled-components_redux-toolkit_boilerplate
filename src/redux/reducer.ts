import { combineReducers } from "@reduxjs/toolkit";

import users from "./Auth/authSlices";

const reducer = combineReducers({
  users,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
