import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal,AppserviceProvider } from '../../providers/appservice/appservice';
import { SetActivityAddPage } from '../../pages/set-activity-add/set-activity-add';
@IonicPage()
@Component({
  selector: 'page-set-activity-detail',
  templateUrl: 'set-activity-detail.html',
})
export class SetActivityDetailPage {
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
    this.appService.httpGet(AppGlobal.API.getActivityDetail, {NewsId: this.NewsId }, "", "", (data) => {
      this.entity = data[0][0];
    }, false);
  }

  editForm(){
    this.navCtrl.push(SetActivityAddPage,{
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
    this.appService.alert("确定要删除此条活动信息吗？",(data)=>{
      if(data=="1"){
        this.appService.httpPost(AppGlobal.API.deleteActivityForm,{NewsId:this.NewsId},"","",(data)=>{
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
