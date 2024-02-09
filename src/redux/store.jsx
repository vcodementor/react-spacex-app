import { configureStore } from '@reduxjs/toolkit';
import LaunchReducer from './Launch/LaunchReducer';

const store = configureStore({
  reducer : {
    launch: LaunchReducer,
  },
  devTools: true,
})

export default store;