import { Component } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
// import { getHostElement } from '@angular/core/src/render3';
// import {SqliteProvider} from "../../providers/sqlite/sqlite";
@IonicPage()
@Component({
  selector: 'page-journaladd',
  templateUrl: 'journaladd.html',
})
export class JournaladdPage {
 
  entity: any = {
    LogID: '',//项目编号
    ProContract: "1",//项目名称
    LogDate: "",//日志日期
    BeginTime: "08:30",//开始时间
    EndTime: "17:30",//结束时间
    WorkSummary: "",//工作内容
    CreateUserName: "",//新增用户名称
    ProContractID: "1",//项目编号
    Remark:""//备注
 
  } 
  callback: any;
  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    //获取父页面传过来的回调方法
    this.callback = this.navParams.get("callback");
    
    if(typeof(this.navParams.get("entity"))!="undefined"){
      this.entity=this.navParams.get("entity");
    }

    this.appService.getItem(AppGlobal.cache.userObj, (data) => {
      this.entity.CreateUserId = data[0].UserId;
      this.entity.CreateUserName = data[0].RealName;
      if(this.entity!=null){
        this.entity.ModifyUserId = data[0].UserId;
        this.entity.ModifyUserName = data[0].RealName;
      }
    })
   

  }

  ionViewDidLoad() {
    this.entity.LogDate=new Date(new Date().getTime()).toISOString().substring(0,10);
  }
  addsave(ProContractID)
  {

    this.entity.BeginTime=this.entity.LogDate+' '+ this.entity.BeginTime;
    this.entity.EndTime=this.entity.LogDate+' '+ this.entity.EndTime;
    this.entity.ProContract=ProContractID.text
    if (this.entity.ProContractID.length == 0) {
      this.appService.toast("请选择项目名称!");
      return false;
    } else if (this.entity.BeginTime.length == 0) {
      this.appService.toast("请输入开始时间!");
      return false;
    }else if (this.entity.EndTime.length == 0) {
      this.appService.toast("请输入结束时间!");
      return false;
    }else if (this.entity.WorkSummary.length == 0) {
      this.appService.toast("请输入工作内容!");
      return false;
    }
    console.log(this.entity);
   /*调用保存编辑接口*/
    this.appService.httpPost(AppGlobal.API.setDiarySaveform, this.entity, "", "", (res) => {
      let param = "保存" + res;
      this.callback(param).then(() => {
      });
      // pop返回方法
     // this.navCtrl.pop();
    }, false);
  //调用SQLite保存接口
  //  this.entity.LogID=this.guid();
  //  this.sqlite.AddLogTable(this.entity);

  }
   guid() {
        var d = new Date().getTime();
        var guid = 'xxxx-xxxx-xxxx-xxxx'.replace(
            /[xy]/g,
            function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);   
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
        return guid;
    };
}
