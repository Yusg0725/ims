import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import{  NewsaddPage} from '../../pages/newsadd/newsadd';
import{NewscontentPage} from '../../pages/newscontent/newscontent';
import { AlertController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public list=[];
  public count=0;
  public page=0;
  public pagesize=9;
  public result=false;

  pagination :any;
  NewsaddPage:any=NewsaddPage;
  NewscontentPage :any=NewscontentPage;

  constructor(public appService:AppserviceProvider,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.refresh('');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  } 
  refresh(Infinite){
    this.pagination={"page":this.page,"records":0,"rows":20};

     /*调用获取列表接口*/
     const url = AppGlobal.API["getNews"];
     const userObj = this.appService.httpGet(url, { PageSize: this.pagesize,PageNum:this.page,TypeId:1   },
       "", "获取失败", (data)=> {
         console.log(data);
         if(data[0].length==0 || data[0].length<this.pagesize)
         {
          Infinite.enable(false);
     
         }else {
       
          this.page++;
        
          this.list=this.list.concat(data[0]);
          console.log("list:"+this.list);
         }
      
       }, true);
    if(Infinite)
    {
      Infinite.complete();
    }

  
  }
  doRefresh(Infinite)
  {
    setTimeout(() => {
      this.refresh(Infinite);
    }, 1000);
      
  }

//   getInfo(keyValue)
//   {
// this.navCtrl.push()

//   }
  presentConfirm(keyValue) {
    console.log(keyValue);
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '确定删除这条新闻吗?',
      buttons: [
        {
          text: '取消',
          role: '取消',
          handler: () => {
            console.log('取消');
          }
        },
        {
          text: '确定',
          handler: () => {
    /*调用删除接口*/
    const url = AppGlobal.API["newsRemoveform"];
    const userObj = this.appService.httpPost(url, {NewsId:keyValue},
    "删除成功", "删除失败", (data)=> {
      this.list=[];
      this.page=0;
      this.refresh("");
      console.log(data);
    
    }, true);
            console.log('删除');
          }
        }
      ]
    });
    alert.present();
  }
  getinfo(){
    this.navCtrl.push(NewsaddPage);
  }
}
