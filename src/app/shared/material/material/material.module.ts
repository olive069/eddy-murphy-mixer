import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatFormFieldModule, MatOptionModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatToolbarModule
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
