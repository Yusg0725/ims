import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQrScannerPage } from './my-qr-scanner';
import { QRScanner } from '@ionic-native/qr-scanner';
@NgModule({
  declarations: [
    MyQrScannerPage,
  ],
  imports: [
    QRScanner,
    IonicPageModule.forChild(MyQrScannerPage),
  ],
})
export class MyQrScannerPageModule {}
