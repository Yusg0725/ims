import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  RealName:any;
  Account:any;
  Mobile:any;
  userObj:any;
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
      this.RealName=data.RealName;
      this.Account=data.Account;
      this.Mobile=data.Mobile;
    });
  }

}
