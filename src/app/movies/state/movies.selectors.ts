import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { adapter, MovieState } from './movies.reducer';

export const movieFeatureSelector = createFeatureSelector<MovieState>('movies');
const { selectAll } = adapter.getSelectors();

export const selectMovies = createSelector(movieFeatureSelector, selectAll)
