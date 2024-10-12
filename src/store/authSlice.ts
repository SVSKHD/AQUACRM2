import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  userState: boolean;
}

const initialState: AuthState = {
  user: null,
  userState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.userState = true;
    },
    logout: (state) => {
      state.user = null;
      state.userState = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
