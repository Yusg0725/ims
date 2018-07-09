import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  goToLogin(){
    this.appService.setItem(AppGlobal.cache["firstIn"],true);
    this.navCtrl.push(LoginPage);
  }

}
