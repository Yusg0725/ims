import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';
import { NoticePage } from '../notice/notice';
import { AppGlobal, AppserviceProvider } from '../../providers/appservice/appservice';
import { variable } from '../../util/globalVariable';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root=NoticePage;
  tab3Root = MyPage;
  tab4Root = SettingPage;
  noticebadge:any=0;
  constructor(public appService: AppserviceProvider) {
    const numlist = AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist, {BadgeFlag:"true",TypeId: 2 }, "", "", (data) => {
      variable.noticebadge = data[0][0]["num"];
      this.noticebadge=variable.noticebadge;
    }, false);
  }

  //当将要进入页面时触发
  ionViewWillEnter(){

  }
}
