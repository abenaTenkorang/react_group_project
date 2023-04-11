import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  error: null,
};

const baseURl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionsAsync = createAsyncThunk(
  'missions/fetchMissionsAsync',
  async () => {
    try {
      const response = await axios.get(baseURl);
      const missions = response.data.map((r) => ({
        id: r.mission_id,
        name: r.mission_name,
        description: r.description,
        joined: false,
      }));
      return missions;
    } catch (e) {
      throw new Error(e.message);
    }
  },
);
/*eslint-disable*/
export const missionSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission(state, action) {
      const newState = state.missions.map((mission) =>
        mission.id !== action.payload ? mission : { ...mission, joined: true }
      );

      return {
        ...state,
        missions: newState,
      };
    },
    leaveMission(state, action) {
      const newState = state.missions.map((mission) =>
        mission.id !== action.payload ? mission : { ...mission, joined: false }
      );

      return {
        ...state,
        missions: newState,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissionsAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissionsAsync.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isLoading: false,
      }))
      .addCase(fetchMissionsAsync.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
