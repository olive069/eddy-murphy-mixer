import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'emm-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {
  private movie: Movie;

  @Input() id: number;
  constructor(private movieService: MovieService) {
  };

  ngOnChanges() {
    this.movieService.find(this.id).subscribe(
      (movie: Movie) => this.movie = movie
    );
  }
}



