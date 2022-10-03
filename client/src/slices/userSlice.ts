import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    signup: (state, action) => {},
    login: (state, action) => {
      state = action.payload;
    },
    logout: (state) => {
      state = {};
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
