import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { of, Observable } from 'rxjs';
import { AudioTrack } from './models/audio-track.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private audiolist1: AudioTrack[] = [{
    url: "url1",
    name: "",
    duration: 12
  }
  ];
  private audiolist2: AudioTrack[] = [{
    url: "url2",
    name: "",
    duration: 65
  }
  ];
  private audiolist3: AudioTrack[] = [{
    url: "url3",
    name: "",
    duration: 45
  }
  ];
  private movies: Movie[] = [
    {
      title: "Film 1",
      year: 1992,
      audiolist: this.audiolist1
    },
    {
      title: "Film 2",
      year: 1995,
      audiolist: this.audiolist2
    },
    {
      title: "Film 3",
      year: 1956,
      audiolist: this.audiolist3
    },
  ];
  constructor() {
  }

  get(): Observable<Movie[]> {
    return of(this.movies);
  }

}
