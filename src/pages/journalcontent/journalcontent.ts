import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

/**
 * Generated class for the JournalcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journalcontent',
  templateUrl: 'journalcontent.html',
})
export class JournalcontentPage {
  entity={};
  LogID:any;
  callback:any;
  addJournal="JournaladdPage";
  constructor(public appService:AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    //获取父页面传过来的回调方法
    this.callback = this.navParams.get("callback");

    this.getInfo();
  }

  getInfo(){
    debugger;
    this.LogID=this.navParams.get("LogID");
    this.appService.httpGet(AppGlobal.API.getDiaryDetail, {LogID: this.LogID }, "", "", (data) => {
      debugger;
      this.entity = data[0][0];
      console.log(this.entity);
    }, false);
  }

  editForm(){
    this.navCtrl.push(this.addJournal,{
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
    this.appService.alert("确定要删除此条日志吗？",(data)=>{
      if(data=="1"){
        this.appService.httpPost(AppGlobal.API.setDiaryDeleteform,{LogID:this.LogID},"","",(data)=>{
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

