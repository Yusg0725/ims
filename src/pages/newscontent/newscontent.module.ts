import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewscontentPage } from './newscontent';

@NgModule({
  declarations: [
    NewscontentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewscontentPage),
  ],
})
export class NewscontentPageModule {}
