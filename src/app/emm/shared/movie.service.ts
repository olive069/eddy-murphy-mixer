import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { of, Observable } from 'rxjs';
import { AudioTrack } from './models/audio-track.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private audiolist1: AudioTrack[] = [
    {
      url: "url1",
      name: "",
      duration: 12
    },
    {
      url: "url2",
      name: "",
      duration: 12
    },
    {
      url: "url3",
      name: "",
      duration: 12
    },
    {
      url: "url4",
      name: "",
      duration: 12
    },
    {
      url: "url5",
      name: "",
      duration: 12
    },
    {
      url: "url6",
      name: "",
      duration: 12
    }
  ];
  private audiolist2: AudioTrack[] = [
    {
      url: "url1",
      name: "",
      duration: 12
    },
    {
      url: "url2",
      name: "",
      duration: 12
    },
    {
      url: "url3",
      name: "",
      duration: 12
    },
    {
      url: "url4",
      name: "",
      duration: 12
    },
    {
      url: "url5",
      name: "",
      duration: 12
    },
    {
      url: "url6",
      name: "",
      duration: 12
    }
  ];
  private audiolist3: AudioTrack[] = [
    {
      url: "url1",
      name: "",
      duration: 12
    },
    {
      url: "url2",
      name: "",
      duration: 12
    },
    {
      url: "url3",
      name: "",
      duration: 12
    },
    {
      url: "url4",
      name: "",
      duration: 12
    },
    {
      url: "url5",
      name: "",
      duration: 12
    },
    {
      url: "url6",
      name: "",
      duration: 12
    }
  ];
  private audiolist4: AudioTrack[] = [
    {
      url: "url1",
      name: "",
      duration: 12
    },
    {
      url: "url2",
      name: "",
      duration: 12
    },
    {
      url: "url3",
      name: "",
      duration: 12
    },
    {
      url: "url4",
      name: "",
      duration: 12
    },
    {
      url: "url5",
      name: "",
      duration: 12
    },
    {
      url: "url6",
      name: "",
      duration: 12
    }
  ];
  private audiolist5: AudioTrack[] = [
    {
      url: "url1",
      name: "",
      duration: 12
    },
    {
      url: "url2",
      name: "",
      duration: 12
    },
    {
      url: "url3",
      name: "",
      duration: 12
    },
    {
      url: "url4",
      name: "",
      duration: 12
    },
    {
      url: "url5",
      name: "",
      duration: 12
    },
    {
      url: "url6",
      name: "",
      duration: 12
    }
  ];
  private movies: Movie[] = [
    {
      id: 1,
      title: "Le flic de Beverly Hills",
      year: 1984,
      director: "Martin Brest",
      poster: "1.jpg",
      audiolist: this.audiolist1
    },
    {
      id: 2,
      title: "Golden child",
      year: 1986,
      director: "Michael Ritchie",
      poster: "2.jpg",
      audiolist: this.audiolist2
    },
    {
      id: 3,
      title: "Le flic de Beverly Hills 2",
      year: 1987,
      director: "Tony Scott",
      poster: "3.jpg",
      audiolist: this.audiolist3
    },
    {
      id: 4,
      title: "Un prince à New York",
      year: 1988,
      director: "John Landis",
      poster: "4.jpg",
      audiolist: this.audiolist4
    },
    {
      id: 5,
      title: "Le flic de Beverly Hills 3",
      year: 1994,
      director: "John Landis",
      poster: "5.jpg",
      audiolist: this.audiolist5
    },
  ];
  constructor() {
  }

  get(): Observable<Movie[]> {
    return of(this.movies);
  }

  find(id: number): Observable<Movie> {
    return of(this.movies.find((movie: Movie) => movie.id === id));
  }

}
