import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesStore } from '../movies.store';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css'],
  providers: [MoviesStore]
})
export class MovieContainerComponent implements OnInit {

  constructor(private moviesService: MoviesService,
    private movieStore: MoviesStore) { }

  ngOnInit() {
    this.moviesService.getMoviesFromDB().subscribe(
      movies => {
        this.movieStore.loadMovies(movies as any)
      }
    )
  }

}
