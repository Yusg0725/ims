import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyZbarPage } from './my-zbar';


@NgModule({
  declarations: [
    MyZbarPage,
  ],
  imports: [
    IonicPageModule.forChild(MyZbarPage),
  ],
})
export class MyZbarPageModule {}
