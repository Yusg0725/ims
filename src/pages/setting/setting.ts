import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { UserinfoPage } from '../../pages/userinfo/userinfo';
import {NewsPage} from '../../pages/news/news';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  userObj:any;
  userPage:any=UserinfoPage;
  NewsPage:any=NewsPage;
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
      this.userObj=data;
    });
  }
}
