const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: {
    missions,
  },
});

export const fetchMissions = () => (dispatch) => {
  const API_URL = 'https://api.spacexdata.com/v3/missions';
  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      const missions = res.map((r) => ({
        id: r.mission_id,
        name: r.mission_name,
        description: r.description,
        joined: false,
      }));
      dispatch(fetchMissionsSuccess(missions));
    });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return action.payload.missions;

    case JOIN_MISSION:
      return state.map((s) => (s.id === action.payload.id ? { ...s, joined: true } : s));

    case LEAVE_MISSION:
      return state.map((s) => (s.id === action.payload.id ? { ...s, joined: false } : s));

    default:
      return state;
  }
}
