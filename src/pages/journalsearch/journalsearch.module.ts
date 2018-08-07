import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournalsearchPage } from './journalsearch';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
      JournalsearchPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(JournalsearchPage),
  ],
})
export class JournalsearchPageModule {}
