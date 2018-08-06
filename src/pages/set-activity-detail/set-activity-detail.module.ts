import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetActivityDetailPage } from './set-activity-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SetActivityDetailPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SetActivityDetailPage),
  ],
})
export class SetActivityDetailPageModule {}
