import { Component } from '@angular/core';
import { IonicPage, ModalController,NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import  {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  userObj:any;
  constructor(public appService: AppserviceProvider,public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
      this.userObj=data;
    });
  }

  logOut(){
    this.appService.setItem(AppGlobal.cache["userObj"],null);
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
