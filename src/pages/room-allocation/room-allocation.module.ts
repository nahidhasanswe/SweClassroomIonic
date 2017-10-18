import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomAllocationPage } from './room-allocation';

@NgModule({
  declarations: [
    RoomAllocationPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomAllocationPage),
  ],
})
export class RoomAllocationPageModule {}
