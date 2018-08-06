import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournalPage } from './journal';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    JournalPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(JournalPage),
  ],
})
export class JournalPageModule {}
