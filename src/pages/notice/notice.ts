import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { variable } from '../../util/globalVariable';
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html'
})
export class NoticePage {
  noticeflag:any='no';
  noticeunreadlist:any = [];
  noticereadlist:any=[];
  noticebadge:any;
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.noticebadge=variable.noticebadge;
    this.getNoticeReadList()//获取已读公告列表
    this.getNoticeUnReadList()//获取未读公告列表
  }
  getNoticeUnReadList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 50, TypeId: 2,BadgeFlag:true }, "", "", (data) => {
      this.noticeunreadlist = data[0];
    });
  }
  getNoticeReadList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 50, TypeId: 2,BadgeFlag:false }, "", "", (data) => {
      this.noticereadlist = data[0];
    });
  }

  showDetail(flag, NewsId) {
    switch (flag) {
      case 1:
        break;
      case 2:
      this.navCtrl.push('NoticecontentPage', {
        edit: false,
        NewsId: NewsId
      });
        break;
      case 3:
        break;

      default:
        break;
    }
  }
}
