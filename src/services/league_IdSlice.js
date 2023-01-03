import { configureStore, createSlice } from "@reduxjs/toolkit";

const leagueSlice = createSlice({
    name: 'League',
    initialState: {
        value_id: null,
        season: null
    },
    reducers: {
        updateLeagueId: (state, action) => {
            state.value_id = action.payload.id;
            state.season = action.payload.season;
        }
    }
})

export const {updateLeagueId} = leagueSlice.actions;
export default leagueSlice.reducer;