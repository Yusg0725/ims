import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetActivityPage } from './set-activity';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SetActivityPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SetActivityPage),
  ],
})
export class SetActivityPageModule {}
