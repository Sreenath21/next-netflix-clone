import { RootState } from "../app/store";

export const getCurrentMovie = (state: RootState) => state.movie.movie;
