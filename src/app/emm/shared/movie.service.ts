import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[];

  constructor() {
    
  }

  get(): Observable<Movie[]> {
    return of(this.movies);
  }

}
