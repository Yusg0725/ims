import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
/**
 * Generated class for the NewscontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newscontent',
  templateUrl: 'newscontent.html',
})
export class NewscontentPage {
  public title;
  public content;
  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
  
   var NewsId=navParams.data["id"];
   var url= AppGlobal.API["newsInfo"];
   
   const userObj = this.appService.httpGet(url, {NewsId:NewsId},
   "获取成功", "获取失败", (data)=> {
     if(data[0].length>0)
     {
      this.title=data[0][0].FullHead;
      this.content= data[0][0].NewsContent;
    

     }

   }, true);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewscontentPage');
  }

}
