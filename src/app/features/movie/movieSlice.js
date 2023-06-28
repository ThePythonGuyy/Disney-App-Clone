import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    recommended : null,
    newOnDisney: null,
    original: null,
    trending: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers : {
        setMovies: (state, action) => {
            state.recommended = action.payload.recommended;
            state.newOnDisney = action.payload.newOnDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
})

export const {setMovies} = movieSlice.actions;

export default movieSlice.reducer;