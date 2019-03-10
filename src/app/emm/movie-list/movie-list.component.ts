import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'emm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() onMovieSelected: EventEmitter<string>;
  private movies: Movie[];
  private selectedMovie: Number;

  constructor(private movieService: MovieService) {
    this.onMovieSelected = new EventEmitter;
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
  }
  onClickMovie(selectedMovie: Number) {
    alert (selectedMovie);
    // const selectedMovie = movielist.value;
    // this.onMovieSelected.emit(selectedMovie);
  }

}
