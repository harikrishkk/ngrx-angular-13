import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Movie } from 'src/app/models/movies.model';
import * as MoviesActions from './movies.actions';

export type MovieState = EntityState<Movie>;
export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id
});

export const initialState = adapter.getInitialState();

export const movieReducer = createReducer(
  initialState,
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) => {
    return adapter.addMany(movies, state)
  })
);

