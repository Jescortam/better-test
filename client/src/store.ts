import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
