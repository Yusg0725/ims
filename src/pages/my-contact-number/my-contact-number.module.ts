import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactNumberPage } from './my-contact-number';

@NgModule({
  declarations: [
    MyContactNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactNumberPage),
  ],
})
export class MyContactNumberPageModule {}
