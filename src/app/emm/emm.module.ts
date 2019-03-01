import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmmComponent } from '@emm/emm/emm.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SoundBoardComponent } from './sound-board/sound-board.component';
import { SoundItemComponent } from './sound-board/sound-item/sound-item.component';
import { EmmRoutingModule } from './emm-routing.module';
import { SharedModule } from '@emm/shared/shared.module';

@NgModule({
  declarations: [
    EmmComponent, 
    MovieListComponent, 
    SoundBoardComponent, 
    SoundItemComponent,
  ],
  imports: [
    CommonModule,
    EmmRoutingModule,
    SharedModule,
  ],
})
export class EmmModule { }
