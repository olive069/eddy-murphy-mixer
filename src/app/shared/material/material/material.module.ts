import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatFormFieldModule, MatOptionModule, MatToolbarModule, MatCardModule, MatButtonModule, MatMenuModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule

  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class MaterialModule { }
