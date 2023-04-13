import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionsReducer from './missions/missions';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});
