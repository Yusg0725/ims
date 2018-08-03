import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public newslist=[];
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    this.getNewList()//获取新闻列表
  }
  getNewList(){
    const listurl=AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl,{PageNum:0,PageSize:5,TypeId:1},"请求成功","请求失败",(data)=>{
      this.newslist=data[0];
    });
  }

}
