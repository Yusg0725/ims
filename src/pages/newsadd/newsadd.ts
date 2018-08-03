import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import {NewsPage} from '../news/news';


// import { NewsPageModule } from '../news/news.module';
/**
 * Generated class for the NewsaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsadd',
  templateUrl: 'newsadd.html',
})
export class NewsaddPage {
  public editorContent="测试内容";
  public keyValue='';
  public title='';
  entity: any = {
    TypeId: 3,
    FullHead: "",
    FullHeadColor: "",
    AuthorName: "",
    SourceName: "",
    NewsContent: "",
    CreateUserId: "",
    CreateUserName: "",
  } 
  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    var NewsId=navParams.data["id"];

    var url= AppGlobal.API["newsInfo"];
    if(NewsId!=null)
    {
 const userObj = this.appService.httpGet(url, {NewsId:NewsId},
    "获取成功", "获取失败", (data)=> {
      if(data[0].length>0)
      {
       this.title=data[0][0].FullHead;
       this.editorContent= data[0][0].NewsContent;
     
 
      }
 
    }, true);

    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsaddPage');
  }
  addsave()
  {
    if (this.entity.FullHead.length == 0) {
      this.appService.toast("请输入标题!");
    
      return false;
    } else if (this.entity.NewsContent.length == 0) {
      this.appService.toast("请输入内容!");
      return false;
    }
   /*调用保存编辑接口*/

   const url = AppGlobal.API["newsSaveform"];
   console.log(this.entity);
   var NewsContent=encodeURI(this.editorContent);
    const userObj = this.appService.httpPost(url, this.entity,
    "保存成功，正在跳转", "保存失败", (data)=> {
      console.log("保存成功："+data);
      this.navCtrl.push(NewsPage);
    }, true);
  }
  
}
