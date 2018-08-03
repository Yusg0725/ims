import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { NewsaddPage} from '../newsadd/newsadd';
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public list = [];
  public page=0;
  public pagesize = 4;
  public pageNum=0;
  pagination: any;
  // public NewsaddPage=NewsaddPage;//新增新闻页面
  NewscontentPage: any = 'NewscontentPage';

  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getList('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  getList(Infinite){
    const numlist=AppGlobal.API.getActivityNum;
    this.appService.httpGet(numlist,{TypeId:1},"","",(data)=>{
      this.pageNum=data[0][0]["num"];
    },false);
    const listurl=AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl,{PageNum:this.page,PageSize:4,TypeId:1},"请求成功","请求失败",(data)=>{
     
      if (data[0].length == 0 || data[0].length < this.pagesize) {
        Infinite.enable(false);
        
      } else {

        this.page++;

        this.list = this.list.concat(data[0]);
      }
      console.log("data:"+data[0]);
      console.log("list:"+this.list);
      // this.list=this.list.unshift(data[0]) ;
   
    },true);
  }

  doRefresh(refresher) {
    
    setTimeout(() => {
      this.getList(refresher);
      refresher.complete();
    }, 2000);
  }
  presentConfirm(keyValue) {
    console.log(keyValue);
    this.appService.alert("确定删除这条新闻吗?", () => {
      /*调用删除接口*/
      const url = AppGlobal.API["newsRemoveform"];
      const userObj = this.appService.httpPost(url, { NewsId: keyValue },
        "删除成功", "删除失败", (data) => {
          this.list = [];
          this.page=0;
          this.getList('');
          console.log(data);
        }, true);
    });
  }

  getinfo() {
     console.log("进来了点击的方法");
    this.navCtrl.push(NewsaddPage);
  }
  openSearch(){

  }
}
