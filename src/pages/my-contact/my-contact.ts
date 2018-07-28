import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-contact',
  templateUrl: 'my-contact.html',
})
export class MyContactPage {
  tab1Root = 'MyContactNumberPage';
  tab2Root = 'MyContactUserPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
