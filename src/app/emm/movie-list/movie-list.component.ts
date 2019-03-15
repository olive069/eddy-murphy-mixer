import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'emm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() onMovieSelected: EventEmitter<number>;
  private movies: Movie[];
  private selectedMovie: string;

  constructor(private movieService: MovieService) {
    this.onMovieSelected = new EventEmitter;
  };

  getMovieList(): void {
    this.movieService.get().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
  };
  ngOnInit() {
    this.getMovieList();
  }
  onClickMovie(id: number) {
    this.onMovieSelected.emit(id);
  }

}
