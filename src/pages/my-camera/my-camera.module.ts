import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCameraPage } from './my-camera';

@NgModule({
  declarations: [
    MyCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCameraPage),
  ],
})
export class MyCameraPageModule {}
