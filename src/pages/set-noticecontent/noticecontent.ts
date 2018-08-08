import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider,AppGlobal } from '../../providers/appservice/appservice';
import { NoticeaddPage } from '../../pages/set-noticeadd/noticeadd';

@IonicPage()
@Component({
  selector: 'page-noticecontent',
  templateUrl: 'noticecontent.html',
})
export class NoticecontentPage {

  public list = {};

  newsId:any;

  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    console.log("newsid  "+this.navParams.get('NewsId'));
    let id = this.navParams.get('NewsId');
    this.getNoticeContent(id);
  }
  
  
  ionViewDidLoad() {
    
  }

  public getNoticeContent(aid){
    const url = AppGlobal.API["getNoticeForm"];
    var _that = this;
    this.appService.httpGet(url,{NewsId:aid},"获取公告内容成功","获取公告内容失败",(data)=>{
      _that.list = data[0][0];
      console.log("1111   "+JSON.stringify(_that.list));
    },false);
  }

  //删除操作
  deletenotice(){
    const url = AppGlobal.API["deleteNotice"];
    this.appService.httpPost(url,{NewsId:this.newsId},"删除公告成功","删除公告失败",(data)=>{
      console.log(data);
      this.navCtrl.push('NoticePage');
    },false);
  }

  noticeedit(){
    const url = AppGlobal.API["getNoticeForm"];
    var _that = this;
    this.appService.httpGet(url,{NewsId:this.newsId},"获取公告内容成功","获取公告内容失败",(data)=>{
      _that.navCtrl.push(NoticeaddPage, {
        firsttitle : data[0][0].FullHead,
        secondtitle: data[0][0].BriefHead,
        content:  data[0][0].NewsContent
      });
    },false);

  }



}
