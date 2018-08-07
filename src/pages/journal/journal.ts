import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
@IonicPage()
@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

  journaladd = 'JournaladdPage';
  journalcontent = 'JournalcontentPage';
  journalsearch = 'JournalsearchPage';
  pageList = [];
  totalNum = 0;
  pageNum = 0;
  pageSize = 10;
  isSearching = false;
  tempinfinite: any = null;

   constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getList(null, null, true);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  getList(Refresh, infiniteScroll, flag) {
    if (this.tempinfinite == null && infiniteScroll != null) {
      this.tempinfinite = infiniteScroll;
    }
    const numlist = AppGlobal.API.getDiaryCount;
    this.appService.httpGet(numlist, {}, "", "", (data) => {
      this.totalNum = data[0][0]["num"];
    }, false);

    const listurl = AppGlobal.API.getDiaryList;
    this.appService.httpGet(listurl, { PageNum: this.pageNum, PageSize: this.pageSize }, "", "", (data) => {
      this.pageNum += 1;
      if (data[0].length < 10) {
        if (this.tempinfinite != null) {
          this.tempinfinite.enable(false);
        } else if(infiniteScroll!=null){
          infiniteScroll.enable(false);
        }
      } else {
        if (this.tempinfinite != null) {
          this.tempinfinite.enable(true);
        }
      }
      for(var i=0;i<data[0].length;i++)
      {
        data[0][i].BeginTime=data[0][i].BeginTime.substring(11,16);
        data[0][i].EndTime=data[0][i].EndTime.substring(11,16);
        if(data[0][i].WorkSummary.length>14)
        {
          data[0][i].WorkSummary=data[0][i].WorkSummary.substring(0,14)+"...";
        }
      }
      if (flag) {
        this.pageList = data[0];
      } else {
        this.pageList = this.pageList.concat(data[0]);
      }
    }, false);
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

  addJournal() {
    this.navCtrl.push(this.journaladd, {
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

  showDetail(LogID) {
    this.navCtrl.push(this.journalcontent, {
      callback: this.callBackSubForm,
      LogID: LogID
    })
  }
  doDelete(LogID) {
    this.appService.httpPost(AppGlobal.API.setDiaryDeleteform, { LogID: LogID }, "删除成功", "删除失败", (data) => {
      if (data == "1") {
        this.pageNum = 0;
        this.getList(null, null, true);
      }
    }, true);
  }
 
}
