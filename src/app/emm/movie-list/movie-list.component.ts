import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'emm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  private movies: Movie[];
  private movie: String;
  constructor(private movieService: MovieService) {
    this.movie = "uyiyiuyui";
  };
  getMovieList(): void {
    this.movies = this.movieService.get().subscribe(
      (data) => {
        this.movies = data;
      }
      );
  };
  ngOnInit() {
  }

}
