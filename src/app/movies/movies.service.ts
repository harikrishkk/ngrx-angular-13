import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesFromDB() {
    return this.http.get('https://api.sampleapis.com/movies/animation')
  }

}

