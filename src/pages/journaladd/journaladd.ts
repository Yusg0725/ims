import { Component,ViewChild,ElementRef } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IonicPage, NavController, NavParams, DateTime, Content } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { getHostElement } from '@angular/core/src/render3';
import {SqliteProvider} from "../../providers/sqlite/sqlite";
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
  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams,public sqlite:SqliteProvider) {

    // var NewsId=navParams.data["id"];

    // var url= AppGlobal.API["newsInfo"];
//     if(NewsId!=null)
//     {
//  const userObj = this.appService.httpGet(url, {NewsId:NewsId},
//     "获取成功", "获取失败", (data)=> {
//       if(data[0].length>0)
//       {
//        this.entity=data[0][0];
     
//       }
 
//     }, true);

//     }
   

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
  //  const url = AppGlobal.API["setDiarySaveform"];
  //   const userObj = this.appService.httpPost(url, this.entity,
  //   "", "", (data)=> {
  //     debugger;
  //     console.log("保存成功："+data);
  //     this.navCtrl.push('JournalPage');
  //   }, true);
  //调用SQLite保存接口
   this.entity.LogID=this.guid();
   this.sqlite.AddLogTable(this.entity);

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
