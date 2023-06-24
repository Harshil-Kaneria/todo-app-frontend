import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/reducers/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
