import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQrscanPage } from './my-qrscan';

@NgModule({
  declarations: [
    MyQrscanPage,
  ],
  imports: [
    IonicPageModule.forChild(MyQrscanPage),
  ],
})
export class MyQrscanPageModule {}
