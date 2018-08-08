import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule,JsonpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { CallNumber } from '@ionic-native/call-number';
import { Contacts } from '@ionic-native/contacts';
import { Base64 } from '@ionic-native/base64';


import {SQLite} from "@ionic-native/sqlite";
import { PipesModule } from '../pipes/pipes.module';
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
    BrowserModule,
    ComponentsModule,
    HttpModule,
    JsonpModule,
    QuillModule,
    FormsModule,
    HttpClientModule,

    QuillModule,
    PipesModule,
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
    Contacts,
    FileTransfer,
    Base64,
    QRScanner,
    Vibration
  ]

})
export class AppModule {}
