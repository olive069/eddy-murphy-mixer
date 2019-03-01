import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmmComponent } from './emm.component';

const routes: Routes = [
  { path: "eddy-murphy-mixer", component: EmmComponent },
  { path: "eddy-murphy-mixer/:movie", component: EmmComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
})
export class EmmRoutingModule { }