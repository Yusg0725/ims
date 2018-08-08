
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider,AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-noticesearch',
  templateUrl: 'noticesearch.html',
})
export class NoticesearchPage {

  public searchValue="";
  public noticelist = [];
  public page = 0;
  totalNum = 0;

  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  //查询操作
  public searchNoticeList(){
    this.requestData(null);
  }


  requestData(infiniteScroll){
    var _that = this;
    const numlist=AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist,{TypeId:2,FullHead:this.searchValue},"成功","失败",(data)=>{
      this.totalNum=data[0][0]["num"];
    },false);

    const url = AppGlobal.API["getNoticeList"];
    this.appService.httpGet(url,{PageNum:this.page,PageSize:10,TypeId:2,FullHead:this.searchValue},"获取列表成功","获取列表失败",(data)=>{
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

  doRefresh(refresher) {
    this.requestData(refresher);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
