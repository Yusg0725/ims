import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournaladdPage } from './journaladd';

@NgModule({
  declarations: [
    JournaladdPage,
  ],
  imports: [
    IonicPageModule.forChild(JournaladdPage),
  ],
})
export class JournaladdPageModule {}
