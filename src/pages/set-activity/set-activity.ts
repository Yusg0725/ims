import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal, AppserviceProvider } from '../../providers/appservice/appservice';
import { SetActivityAddPage } from '../../pages/set-activity-add/set-activity-add';

@IonicPage()
@Component({
  selector: 'page-set-activity',
  templateUrl: 'set-activity.html',
})
export class SetActivityPage {
  activity = SetActivityAddPage;
  activityDetail = 'SetActivityDetailPage';
  activitySearch = 'SetActivitySearchPage';
  pageList = [];
  totalNum = 0;
  pageNum = 0;
  pageSize = 10;
  isSearching = false;
  tempinfinite: any = null;
  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.getList(null, null, true);
  }

  ionViewDidLoad() {
    this.getList(null, null, true);
  }
  getList(Refresh, infiniteScroll, flag) {
    if (this.tempinfinite == null && infiniteScroll != null) {
      this.tempinfinite = infiniteScroll;
    }
    const numlist = AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist, { TypeId: 3 }, "", "", (data) => {
      this.totalNum = data[0][0]["num"];
    }, false);

    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: this.pageNum, PageSize: this.pageSize, TypeId: 3 }, "", "", (data) => {
      this.pageNum += 1;
      if (data[0].length < 10) {
        if (this.tempinfinite != null) {
          this.tempinfinite.enable(false);
        }
        if (infiniteScroll != null) {
          infiniteScroll.enable(false);
        }
      } else {
        if (this.tempinfinite != null) {
          this.tempinfinite.enable(true);
        }
      }
      if (flag) {
        this.pageList = data[0];
      } else {
        this.pageList = this.pageList.concat(data[0]);
      }
    }, false);
  }

  addActivity() {
    this.navCtrl.push(this.activity, {
      callback: this.callBackSubForm
    })
  }

  // 用于pop 回调的 block
  callBackSubForm = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        if (params == "保存1") {
          this.appService.loading("保存成功");
          //this.pageList = [];
          this.pageNum = 0;
          this.getList(null, null, true);
        }
        if (params == "删除1") {
          this.appService.loading("删除成功");
          //this.pageList = [];
          this.pageNum = 0;
          this.getList(null, null, true);
        }
        //resolve('成功取到B页面返回的参数');
        //console.log('B页面参数为: ' + params);

      } else {
        //reject('取回B页面数据失败');
      }
    });
  }

  showDetail(newsid) {
    this.navCtrl.push(this.activityDetail, {
      callback: this.callBackSubForm,
      NewsId: newsid
    })
  }

  doRefresh(refresher) {
    this.pageNum = 0;
    this.getList(null, null, true);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    this.getList(null, infiniteScroll, false);
    setTimeout(() => {
      infiniteScroll.complete();

    }, 2000);
  }

  doDelete(newsid) {
    this.appService.httpPost(AppGlobal.API.deleteActivityForm, { NewsId: newsid }, "删除成功", "删除失败", (data) => {
      if (data == "1") {
        this.pageNum = 0;
        this.getList(null, null, true);
      }
    }, true);
  }
}
