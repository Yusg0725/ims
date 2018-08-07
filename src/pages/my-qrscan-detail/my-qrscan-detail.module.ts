import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQrscanDetailPage } from './my-qrscan-detail';

@NgModule({
  declarations: [
    MyQrscanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyQrscanDetailPage),
  ],
})
export class MyQrscanDetailPageModule {}
