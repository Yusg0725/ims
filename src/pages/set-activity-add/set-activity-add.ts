import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal, AppserviceProvider } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-set-activity-add',
  templateUrl: 'set-activity-add.html',
})
export class SetActivityAddPage {
  colorValue: any;
  colorList: any = ['#7E9DE7', '#F6C34C', '#46C6C8', '#FF6666', '#9CCC65', '#14c760', '#886aea', '#f3456d', '#f4d95b', 'f49930', 'f26d26', '#005e37', '#3eb866', '#f8e400', '#f26378', '#13dbad', 'ff7d48', 'a2ef54'];
  entity: any = {
    TypeId: 3,
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

  changecolorTitle() {
    document.getElementById("fullhead").style.color = this.colorList[this.colorValue];
    this.entity.FullHeadColor = this.colorList[this.colorValue];
  }

  saveForm() {
    this.appservice.httpPost(AppGlobal.API.saveActivityForm, this.entity, "", "", (res) => {
      let param = "保存" + res;
      this.callback(param).then(() => {
      });
      // pop返回方法
      this.navCtrl.pop();
    }, false);
  }
}
