import { configureStore, createSlice } from "@reduxjs/toolkit";

const leagueSlice = createSlice({
    name: 'League',
    initialState: {
        value: -1
    },
    reducers: {
        updateLeagueId: (state, action) => {
            state.leagueId = action.payload
        }
    }
})

export const {updateLeagueId} = leagueSlice.actions;
export default leagueSlice.reducer;