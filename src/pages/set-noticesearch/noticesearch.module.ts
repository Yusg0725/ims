import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticesearchPage } from './noticesearch';

@NgModule({
  declarations: [
    NoticesearchPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticesearchPage),
  ],
})
export class NoticesearchPageModule {}
