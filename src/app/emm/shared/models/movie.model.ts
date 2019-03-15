import { AudioTrack } from './audio-track.model';

export class Movie {
    id:number;
    title:string;
    year:number;
    director:string;
    poster:string;
    audiolist:AudioTrack[];
}