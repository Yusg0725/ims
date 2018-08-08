import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNoticePage } from './set-notice';

@NgModule({
  declarations: [
    SetNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(SetNoticePage),
  ],
})
export class NoticePageModule {}
