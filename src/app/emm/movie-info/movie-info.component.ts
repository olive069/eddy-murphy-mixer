import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'emm-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  private movies: Movie[];
  private movie: Number;
  constructor(private movieService: MovieService) {

  };

  getMovieList(): Movie[] {
    this.movieService.get().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    return this.movies;
  };
  ngOnInit() {
    this.movies = this.getMovieList();

  };
  ngOnChanges() {

  }

}
