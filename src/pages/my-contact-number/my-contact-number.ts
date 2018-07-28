import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-my-contact-number',
  templateUrl: 'my-contact-number.html',
})
export class MyContactNumberPage {

  phonenumber: any = "";
  constructor(private callNumber: CallNumber, public navCtrl: NavController, public navParams: NavParams) {
  }

  doOperation(num) {
    if (this.phonenumber != "" && num == '-1')
      this.phonenumber = this.phonenumber.substr(0, this.phonenumber.length - 1);
    else if (num != '-1')
      this.phonenumber += num;
  }

  call() {
    this.callNumber.callNumber(this.phonenumber, true)
      .then(res => console.log('启动拨号', res))
      .catch(err => console.log('启动拨号失败', err));
  }
}
