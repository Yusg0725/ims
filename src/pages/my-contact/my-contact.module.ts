import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactPage } from './my-contact';

@NgModule({
  declarations: [
    MyContactPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactPage),
  ],
})
export class MyContactPageModule {}
