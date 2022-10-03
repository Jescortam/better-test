import { NavigateFunction } from 'react-router-dom';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk(
  'users/login',
  async (params: { values: Object; navigate: NavigateFunction }, thunkAPI) => {
    const userId = (await axios.post('/api/signup', params.values)).data;
    const response = await axios.get(`/api/fetchUser/${userId}`);

    params.navigate('/');
    return response.data;
  }
);
