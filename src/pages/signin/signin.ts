import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
/**
 * 手机打卡
 */
export class SigninPage {

  list=[];
  pet: string ="today";
  public page = 0;
  pageNum = 0;

  user = {
    userid:"",
    username:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppserviceProvider) {

  }

  ionViewDidLoad() {
    this.list=[];
    this.appService.getItem(AppGlobal.cache["userObj"], (data) => {
      this.user.userid = data[0].UserId;
      this.user.username = data[0].RealName;
    });
    this.requestData();
  }

  addSignIn(){
    this.navCtrl.push('SigninaddPage');
  }


  requestData(){
    const url = AppGlobal.API["clockList"];
    var _that = this;
    this.appService.httpGet(url,{PageNum:this.page,PageSize:10,CreateUserId:this.user.userid},"获取列表成功","获取列表失败",(data)=>{
      _that.list = _that.list.concat(data[0]);
    },false);

  }
  


}
