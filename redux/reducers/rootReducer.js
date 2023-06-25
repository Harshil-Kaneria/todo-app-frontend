import { combineReducers } from '@reduxjs/toolkit';
import authUserReducer from '@/redux/reducers/slice/authSlice';

const rootReducer = combineReducers({
  user: authUserReducer,
});

export default rootReducer;
