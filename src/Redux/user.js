import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userName: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
//export const selectUser = (state) => state.userName
export default authSlice.reducer;
