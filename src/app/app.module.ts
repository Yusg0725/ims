import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';

import { HttpModule,JsonpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';


import { MyPage } from '../pages/my/my';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { MsgServiceProvider } from '../providers/msg-service/msg-service';

@NgModule({
  declarations: [
    MyApp,
    MyPage,
    SettingPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPage,
    SettingPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServiceProvider,
    MsgServiceProvider
  ]
})
export class AppModule {}
