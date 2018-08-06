import { Component } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {  NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
// import {NewsPage} from '../news/news';


// import { NewsPageModule } from '../news/news.module';
/**
 * Generated class for the NewsaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-newsadd',
  templateUrl: 'newsadd.html',
})
export class NewsaddPage {
   entity: any = {
    TypeId: 1,
    FullHead: "",
    FullHeadColor: "",
    AuthorName: "",
    SourceName: "",
    NewsContent: "",
    CreateDate:"",
    CreateUserId: "",
    CreateUserName: "",
    ModifyDate:"",
    ModifyUserId:"",
    ModifyUserName:"",
  }
  callback: any;
  constructor(public appservice: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    //获取父页面传过来的回调方法
    this.callback = this.navParams.get("callback");
    
    if(typeof(this.navParams.get("entity"))!="undefined"){
      this.entity=this.navParams.get("entity");
    }

    this.appservice.getItem(AppGlobal.cache.userObj, (data) => {
      this.entity.CreateUserId = data[0].UserId;
      this.entity.CreateUserName = data[0].RealName;
      if(this.entity!=null){
        this.entity.ModifyUserId = data[0].UserId;
        this.entity.ModifyUserName = data[0].RealName;
      }
    })
  }



  saveForm() {
    this.appservice.httpPost(AppGlobal.API.newsSaveform, this.entity, "", "", (res) => {
      let param = "保存" + res;
      this.callback(param).then(() => {
      });
      // pop返回方法
      this.navCtrl.pop();
    }, false);
  }
}
