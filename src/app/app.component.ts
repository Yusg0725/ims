import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { TabsPage } from '../pages/tabs/tabs';
import { AppserviceProvider, AppGlobal } from '../providers/appservice/appservice';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'app.html'//起始页
})
export class MyApp {
  rootPage: any = LoginPage;
  constructor(public appService: AppserviceProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // this.appService.getItem(AppGlobal.cache["firstIn"], (data) => {
    //   //验证是否第一次登录
    //   if (data == null) {
    //     this.rootPage = WelcomePage;
    //   }else{
    this.appService.getItem(AppGlobal.cache["userObj"], (data) => {
      //验证用户信息,跳过登录页
      if (data != null) {
        this.rootPage = TabsPage;
      }
    });
    //   }
    // });

    platform.ready().then(() => {
      //statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 1000)

      //扩展API加载完成事件
      document.addEventListener("plusready", () => {

      });
      //设备网络状态变化事件
      document.addEventListener("netchange", () => {

      });
      //运行环境从后台切换到前台事件
      document.addEventListener("resume", () => {

        console.log("resume"); //进入，前台展示

      }, false);

      //运行环境从前台切换到后台事件
      document.addEventListener("pause", () => {

        console.log("pause"); //退出，后台运行

      }, false);
      
    });
  }
}
