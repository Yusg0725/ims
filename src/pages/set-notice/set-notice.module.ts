import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetNoticePage } from './set-notice';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SetNoticePage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SetNoticePage),
  ],
})
export class SetNoticePageModule {}
