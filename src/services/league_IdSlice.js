import { configureStore, createSlice } from "@reduxjs/toolkit";

const leagueSlice = createSlice({
    name: 'League',
    initialState: {
        value: 39
    },
    reducers: {
        updateLeagueId: (state, action) => {
            state.value = action.payload.id
        }
    }
})

export const {updateLeagueId} = leagueSlice.actions;
export default leagueSlice.reducer;