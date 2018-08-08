import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { NewsaddPage} from '../newsadd/newsadd';

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
  entity={};
  NewsId:any;
  edit:any=true;
  callback:any;
  constructor(public appService:AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    //获取父页面传过来的回调方法
    this.callback = this.navParams.get("callback");
    if(typeof(this.navParams.get("edit"))!="undefined"){
      this.edit=this.navParams.get("edit");
    }
    this.getInfo();
  }

  getInfo(){
    this.NewsId=this.navParams.get("NewsId");
    this.appService.httpGet(AppGlobal.API.newsInfo, {NewsId: this.NewsId }, "", "", (data) => {
      this.entity = data[0][0];
    }, false);
  }

  editForm(){
    this.navCtrl.push(NewsaddPage,{
      callback: this.callBackSubForm,
      entity:this.entity
    });
  }

  callBackSubForm = (params) => {
    return new Promise((resolve, reject) => {
      if (params) {
        if (params == "1") {
          this.appService.loading("保存成功");
          this.getInfo();
        }
      } else {
      }
    });
  }

  deleteForm(){
    this.appService.alert("确定要删除此条新闻信息吗？",(data)=>{
      if(data=="1"){
        this.appService.httpPost(AppGlobal.API.newsRemoveform,{NewsId:this.NewsId},"","",(data)=>{
          let param = "删除"+data;
          this.callback(param).then(()=>{
            
          });
          // pop返回方法
          this.navCtrl.pop();
        },false);
      }
    });
  }
}
