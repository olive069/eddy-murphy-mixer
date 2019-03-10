import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emm-emm',
  templateUrl: './emm.component.html',
  styleUrls: ['./emm.component.scss']
})
export class EmmComponent implements OnInit {
   
  public movie:String;
  private onMovieSelected: Number;

  constructor() { 
  }

  ngOnInit() {
  }

}
