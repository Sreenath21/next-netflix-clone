import { DocumentData } from "firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";

import { Movie } from "../typings";

interface IMovieState {
  movie: Movie | DocumentData | null;
}

const initialState: IMovieState = {
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { setCurrentMovie } = movieSlice.actions;
export default movieSlice.reducer;
