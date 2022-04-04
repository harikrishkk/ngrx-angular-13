import { MoviesEffects } from './state/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { movieReducer } from './state/movies.reducer';
import { MoviesStore } from './movies.store';
import { MovieContainerComponent } from './movie-container/movie-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MoviesEffects]),

  ],
  declarations: [MoviesComponent, MovieContainerComponent],
  exports: [MovieContainerComponent],
  providers: [MoviesStore]
})
export class MoviesModule { }
