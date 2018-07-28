import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContactUserPage } from './my-contact-user';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    MyContactUserPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContactUserPage),
    PipesModule
  ],
})
export class MyContactUserPageModule {}
