import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  smsInfo:any;
  @Input() phoneNumbers:any;
  phoneNumber:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.phoneNumber=navParams.get('phoneNumber');
  }

  send(){
    let data = { 'smsInfo': this.smsInfo };
    this.viewCtrl.dismiss(data);
  }

  cancel(){
    let data = { 'smsInfo': this.smsInfo };
    this.viewCtrl.dismiss(data);
  }
}
