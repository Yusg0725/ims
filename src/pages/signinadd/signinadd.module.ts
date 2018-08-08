import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninaddPage } from './signinadd';

@NgModule({
  declarations: [
    SigninaddPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninaddPage),
  ],
})
export class SigninaddPageModule {}
