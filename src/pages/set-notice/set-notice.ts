import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider,AppGlobal } from '../../providers/appservice/appservice';
import { NoticeaddPage } from '../../pages/set-noticeadd/noticeadd';

@IonicPage()
@Component({
  selector: 'page-set-notice',
  templateUrl: 'set-notice.html',
})
export class SetNoticePage {

  public noticelist = [];
  public page = 0;
  pageNum = 0;

  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.requestData(null);
  }

  ionViewDidLoad() {
  }


  //属性跳转   公告详情页面
  public NoticecontentPage = 'NoticecontentPage';


  requestData(infiniteScroll){
    var _that = this;
    const numlist=AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist,{TypeId:2},"","",(data)=>{
      this.pageNum=data[0][0]["num"];
    },false);
    const url = AppGlobal.API["getNoticeList"];
    this.appService.httpGet(url,{PageNum:this.page,PageSize:10,TypeId:2,FullHead:""},"获取列表成功","获取列表失败",(data)=>{
      _that.noticelist = _that.noticelist.concat(data[0]);
      _that.page++;
      if (infiniteScroll) {
        infiniteScroll.complete();
        if(data[0]<10){/**没有数据隐藏底部刷新 */
          infiniteScroll.enable(false);
        }
      }
    },false);
  }

  //上拉刷新
  doInfinite(infiniteScroll){  /*接收事件对象传值*/
    console.log("doinfinite........  ");
    this.requestData(infiniteScroll);
  }

  //删除操作
  deletenotice(aid){
    console.log(aid);
    const url = AppGlobal.API["deleteNotice"];
    this.appService.httpPost(url,{NewsId:aid},"删除公告成功","删除公告失败",(data)=>{
      this.pageNum = 0;
      this.requestData(null);
    },false);
  }


  tosearch(){
    this.navCtrl.push('NoticesearchPage');
  }


  noticeadd(){
    this.navCtrl.push(NoticeaddPage);
  }

  doRefresh(refresher) {
    this.requestData(refresher);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  callBackSubForm = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        if (params == "保存1") {
          this.appService.loading("保存成功");
          this.pageNum = 0;
          this.requestData(null);
        }
        if (params == "删除1") {
          this.appService.loading("删除成功");
          this.pageNum = 0;
          this.requestData(null);
        }
      } else {
      }
    });
  }

  

}
