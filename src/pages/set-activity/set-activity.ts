import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal,AppserviceProvider } from '../../providers/appservice/appservice';


@IonicPage()
@Component({
  selector: 'page-set-activity',
  templateUrl: 'set-activity.html',
})
export class SetActivityPage {
  activity='SetActivityAddPage';
  pageList=[];
  pageNum=0;
  isSearching = false;
  constructor(public appService:AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getList();
  }

  getList(){
    const numlist=AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist,{TypeId:3},"","",(data)=>{
      this.pageNum=data[0][0]["num"];
    },false);
    const listurl=AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl,{PageNum:0,PageSize:10,TypeId:3},"请求成功","请求失败",(data)=>{
     this.pageList=data[0];
    },true);
  }

  doRefresh(refresher) {
    this.getList();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
