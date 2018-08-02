import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQrScannerPage } from './my-qr-scanner';
@NgModule({
  declarations: [
    MyQrScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(MyQrScannerPage),
  ],
})
export class MyQrScannerPageModule {}
