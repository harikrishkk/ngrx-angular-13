import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Movie } from "../models/movies.model";

export interface MoviesState {
  movies: Movie[];
}

const defaultState: MoviesState = {
  movies: []
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {

  constructor() {
    super(defaultState);
  }

  readonly movies$ = this.select(state => state.movies);

  readonly loadMovies = this.updater((state, movies: Movie[] | null) => {

    return {
      ...state,
      movies: movies || [],
    }
  });
}
