import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule} from '@angular/http';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { QuillModule } from 'ngx-quill';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { MyApp } from './app.component';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { Contacts } from '@ionic-native/contacts';
import { Base64 } from '@ionic-native/base64';
import {SQLite} from "@ionic-native/sqlite";
import { QRScanner } from '@ionic-native/qr-scanner';

import { MyPage } from '../pages/my/my';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { NoticePage } from '../pages/notice/notice';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { NoticeaddPage } from '../pages/set-noticeadd/noticeadd';
import { NewsaddPage} from '../pages/newsadd/newsadd';
import { SetActivityAddPage } from '../pages/set-activity-add/set-activity-add';

import { Vibration } from '@ionic-native/vibration';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AppserviceProvider,AppGlobal } from '../providers/appservice/appservice';
import { SqliteProvider } from '../providers/sqlite/sqlite';


@NgModule({
  declarations: [
    MyApp,
    MyPage,
    SettingPage,
    HomePage,
    NoticePage,
    TabsPage,
    LoginPage,
	  NoticeaddPage,
    SetActivityAddPage,
    NewsaddPage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    QuillModule,
    PipesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
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
    SettingPage,
    HomePage,
    NoticePage,
    TabsPage,
    LoginPage,
	  NoticeaddPage,
    NewsaddPage,
    SetActivityAddPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppserviceProvider,
    AppGlobal,
    Camera,
    File,
    SQLite,
    SqliteProvider,
    CallNumber,
    SMS,
    Contacts,
    FileTransfer,
    Base64,
    QRScanner,
    Vibration,
    LocalNotifications
  ]

})
export class AppModule {}
