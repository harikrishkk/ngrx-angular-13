import { MoviesEffects } from './state/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { movieReducer } from './state/movies.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  declarations: [MoviesComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
