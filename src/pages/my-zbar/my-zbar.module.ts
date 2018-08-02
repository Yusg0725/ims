import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyZbarPage } from './my-zbar';
import { ZBar } from '@ionic-native/zbar';

@NgModule({
  declarations: [
    MyZbarPage,
  ],
  imports: [
    ZBar,
    IonicPageModule.forChild(MyZbarPage),
  ],
})
export class MyZbarPageModule {}
