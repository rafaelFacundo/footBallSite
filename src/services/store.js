import { configureStore } from "@reduxjs/toolkit";
import leagueReducer from "./league_IdSlice";

export default configureStore({
    reducer: {
        leagueId: leagueReducer
    }
});