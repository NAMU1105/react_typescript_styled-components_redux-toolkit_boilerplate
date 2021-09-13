import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
  tokenExpirationDate?: Date | number | string;
  recentLogin: string;
  currentLogin: string;
  createdAt: string;
  language?: string;
  phone?: string;
}

export const users = createSlice({
  name: "users",
  initialState: {
    authUser: {} as User,
  },
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.authUser = action.payload;
    },
    delUser(state) {
      state.authUser = {} as User;
    },
    // updateUser(state, action: PayloadAction<User>) {
    //   state.authUser = action.payload;
    // },
  },
});

export const { addUser, delUser } = users.actions;
export default users.reducer;
