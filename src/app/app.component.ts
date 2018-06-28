import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {LoginPage} from "../pages/login/login";
import { TabsPage } from '../pages/tabs/tabs';
//引入http组件
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var $:any;
@Component({
  templateUrl: 'app.html'//起始页
})
export class MyApp {
  //是否已经登录过了
  showInfo:boolean;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //获取曾经登录过的用户的信息
    let myuser = localStorage.getItem('Account');
    let mypsw = localStorage.getItem('Password');
    platform.ready().then(() => {
      //验证用户信息,跳过登录页
      if(myuser===null||mypsw===null){
        this.showInfo=false;
      }
      if (this.showInfo === false) {  
        this.rootPage = LoginPage;  
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
