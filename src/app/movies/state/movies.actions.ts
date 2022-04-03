import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Movie } from 'src/app/models/movies.model';

export const loadMoviesInit = createAction('[Movies/API] Load Movies Init');
export const loadMoviesSuccess = createAction('[Movies/API] Load Movies Success', props<{ movies: Movie[] }>());
