import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alipay } from '@ionic-native/alipay';

@IonicPage()
@Component({
  selector: 'page-my-alipay',
  templateUrl: 'my-alipay.html',
})
export class MyAlipayPage {

  constructor(private alipay: Alipay, public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAlipayPage');
  }

}
