import { AudioTrack } from './audio-track.model';

export class Movie {
    id:Number;
    title:String;
    year:Number;
    director:String;
    poster:String;
    audiolist:AudioTrack[];
}