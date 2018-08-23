import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';
import { NoticePage } from '../notice/notice';
import { AppGlobal, AppserviceProvider } from '../../providers/appservice/appservice';
import { variable } from '../../util/globalVariable';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = NoticePage;
  tab3Root = MyPage;
  tab4Root = SettingPage;
  noticebadge: any = 0;
  userObj: any;
  private static s_instance:TabsPage = null;
  private platformInstance_LiveRadioPage:TabsPage;
  constructor(private localNotifications: LocalNotifications, public appService: AppserviceProvider) {
    TabsPage.s_instance = this;
    window['platformInstance_TabsPage'] = TabsPage.s_instance;
    this.InitNoticeBadge();
    this.appService.getItem(AppGlobal.cache.userObj, (data) => {
      this.userObj = data[0];
    });
  }

  //当将要进入页面时触发
  ionViewWillEnter() {

  }
  //初始化首页活动徽章
  InitNoticeBadge() {
    const numlist = AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist, { BadgeFlag: "true", TypeId: 2 }, "", "", (data) => {
      variable.noticebadge = data[0][0]["num"];
      this.noticebadge = variable.noticebadge;
    }, false);
  }

  //发送通知
  NoticeaddPage(){
    this.localNotifications.schedule({
      id: 1,
      text: '新的公告',
      sound: 'file://sound.mp3',
      data: { secret: "" },
      launch:true,
      lockscreen:true
    });
  }
}
