import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';
import {QuillModule}from 'ngx-quill';

import { HttpModule,JsonpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Base64 } from '@ionic-native/base64';

import { MyPage } from '../pages/my/my';
import { MyCameraPage } from '../pages/my-camera/my-camera';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { WelcomePage} from '../pages/welcome/welcome';
import { UserinfoPage} from '../pages/userinfo/userinfo';
import {NewsPage}from '../pages/news/news';
import {NewsaddPage} from '../pages/newsadd/newsadd';
import {NewscontentPage} from '../pages/newscontent/newscontent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppserviceProvider,AppGlobal } from '../providers/appservice/appservice';
import { MsgServiceProvider } from '../providers/msg-service/msg-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    MyPage,
    MyCameraPage,
    SettingPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    UserinfoPage,
    NewsPage,
    NewsaddPage,
    NewscontentPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    QuillModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'返回',
      backButtonIcon:'ios-arrow-back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',//tabs导航的位置
      pageTransition: 'ios-transition',
      swipeBackEnabled:true,//实现屏幕右滑返回
      tabsHideOnSubPages:'true'//隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPage,
    MyCameraPage,
    SettingPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    UserinfoPage,
    NewsPage,
    NewsaddPage,
    NewscontentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MsgServiceProvider,
    HttpServiceProvider,
    ConfigProvider,
    AppserviceProvider,
    AppGlobal,
    Camera,
    File,
    FileTransfer,
    Base64
  ]
})
export class AppModule {}
