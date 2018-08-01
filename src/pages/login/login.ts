import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import 'rxjs/add/operator/map';
//引入自定义组件模块
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public appService: AppserviceProvider, private navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    //是否拥有进入主页的权限
    if (username.value.length == 0) {
      this.appService.toast("请输入员工编号!");
      return false;
    } else if (password.value.length == 0) {
      this.appService.toast("请输入员工密码!");
      return false;
    }
    /*调用登录接口*/

    const url = AppGlobal.API.login;
    this.appService.httpPost(url, { Account: username.value, PassWord: password.value },
      "登录成功,正在跳转……", "登录失败,账号或密码错误", (data)=> {
            this.appService.setItem(AppGlobal.cache.userObj, data[0]);
            this.navCtrl.push(TabsPage);
      }, true);
  }
}
