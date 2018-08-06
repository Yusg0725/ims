import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAlipayPage } from './my-alipay';

@NgModule({
  declarations: [
    MyAlipayPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAlipayPage),
  ],
})
export class MyAlipayPageModule {}
