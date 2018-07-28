import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  userObj:any;
  userPage:any='UserinfoPage';
  activityPage:any='SetActivityPage';
  newsPage:any='NewsPage';
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.appService.getItem(AppGlobal.cache.userObj,(data)=>{
      this.userObj=data[0];
    });
  }
}
