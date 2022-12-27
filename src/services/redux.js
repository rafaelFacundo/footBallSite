import { configureStore, createSlice } from "@reduxjs/toolkit";

const leagueSlice = createSlice({
    name: 'League',
    initialState: {
        leagueId: 0
    },
    reducers: {
        setLeagueId: (newId) => {
            state.leagueId = newId
        }
    }
})

export const {setLeagueId} = leagueSlice.actions;
export default leagueSlice.reducer;