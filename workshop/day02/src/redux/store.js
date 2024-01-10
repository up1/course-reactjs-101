import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demoSlice';

export default configureStore({
  reducer: {
    demo: demoReducer,
  },
});