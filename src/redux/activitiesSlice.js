import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfActivities: [],
};

export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    setActivities: (state, action) => {
      state.listOfActivities = action.payload;
    },
  },
});

export const { setActivities } = activitiesSlice.actions;

export default activitiesSlice.reducer;
