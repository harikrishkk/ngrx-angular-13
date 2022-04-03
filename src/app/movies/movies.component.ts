
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesStore } from './movies.store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  movies$ = this._movieStore.movies$;

  constructor(private readonly _movieStore: MoviesStore) {
  }
}
