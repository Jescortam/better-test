import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
