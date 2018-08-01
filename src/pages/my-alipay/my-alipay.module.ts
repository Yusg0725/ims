import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAlipayPage } from './my-alipay';
import { Alipay } from '@ionic-native/alipay';

@NgModule({
  declarations: [
    MyAlipayPage,
  ],
  imports: [
    Alipay,
    IonicPageModule.forChild(MyAlipayPage),
  ],
})
export class MyAlipayPageModule {}
