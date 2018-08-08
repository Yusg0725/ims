import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public newslist = [];
  public activitylist = [];
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.getNewList()//获取新闻列表
    this.getActivityList()//获取活动列表
  }
  getNewList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 1 }, "", "", (data) => {
      this.newslist = data[0];
    });
  }

  getActivityList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 3 }, "", "", (data) => {
      this.activitylist = data[0];
    });
  }

  showDetail(flag, newsid) {
    switch (flag) {
      case 1:
      this.navCtrl.push('NewscontentPage', {
        edit: false,
        NewsId: newsid
      });
        break;
      case 3:
        this.navCtrl.push('SetActivityDetailPage', {
          edit: false,
          NewsId: newsid
        });
        break;
    }
  }
  goPage(page){
    this.navCtrl.push(page);
  }
}
