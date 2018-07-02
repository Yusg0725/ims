import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {LoginPage} from "../pages/login/login";
import { TabsPage } from '../pages/tabs/tabs';
import { AppserviceProvider, AppGlobal } from '../providers/appservice/appservice';
//引入http组件
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var $:any;
@Component({
  templateUrl: 'app.html'//起始页
})
export class MyApp {
  rootPage:any = TabsPage;
  constructor(public appService:AppserviceProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      //获取曾经登录过的用户的信息
      let myuser:any;
      this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
        //验证用户信息,跳过登录页
        if(data==null)
            this.rootPage = LoginPage;

      });
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
