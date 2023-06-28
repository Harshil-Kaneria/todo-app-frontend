import { combineReducers } from '@reduxjs/toolkit';
import authUserReducer from '@/redux/reducers/slice/authSlice';
import profileUserReducer from '@/redux/reducers/slice/profileSlice';

const rootReducer = combineReducers({
  user: authUserReducer,
  profile: profileUserReducer,
});

export default rootReducer;
