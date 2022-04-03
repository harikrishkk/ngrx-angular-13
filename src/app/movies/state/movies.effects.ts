import { MoviesService } from './../movies.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from "rxjs";
import * as MovieActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMoviesInit),
      mergeMap(() => this.moviesService.getMoviesFromDB().pipe(
        map(movies => ({
          type: '[Movies/API] Load Movies Success',
          movies
        }))
      )
      )
    )
  })
  constructor(private actions$: Actions,
    private moviesService: MoviesService) {

  }
}
