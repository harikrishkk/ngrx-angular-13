import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { loadMoviesInit } from './state/movies.actions';
import { selectMovies } from './state/movies.selectors';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$ = this.store.select(selectMovies);
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadMoviesInit())
  }

}
