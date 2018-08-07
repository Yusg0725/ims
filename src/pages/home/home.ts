import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public newslist = [];
  public noticelist = [];
  public activitylist = [];
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.getNewList()//获取新闻列表
    this.getNoticeList()//获取公告列表
    this.getActivityList()//获取活动列表
  }
  getNewList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 1 }, "", "", (data) => {
      this.newslist = data[0];
    });
  }
  getNoticeList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 2 }, "", "", (data) => {
      this.noticelist = data[0];
    });
  }
  getActivityList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 3 }, "", "", (data) => {
      this.activitylist = data[0];
    });
  }

  showDetail(flag, NewsId) {
    switch (flag) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        this.navCtrl.push('SetActivityDetailPage', {
          edit: false,
          NewsId: NewsId
        });
        break;

      default:
        break;
    }
  }
}
