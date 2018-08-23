import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  gridList = [
    {
      icon: 'paper-outline',
      name: '照相机',
      color: 'bgcolor_d',
      url: 'MyCameraPage'
    },
    {
      icon: 'hand-outline',
      name: '扫一扫',
      color: 'bgcolor_a',
      url: 'MyQrscanPage'
    },
    {
      icon: 'people-outline',
      name: '发送短信',
      color: 'bgcolor_b',
      url: 'MyContactUserPage'
    }, 
    {
      icon: 'camera-outline',
      name: '',
      color: 'bgcolor_c',
      url: 'MyCameraPage'
    },
    {
      icon: 'pin-outline',
      name: '',
      color: 'bgcolor_d',
      url: '5'
    },
    {
      icon: 'image-outline',
      name: '',
      color: 'bgcolor_e',
      url: '6'
    }, {
      icon: 'ionitron-outline',
      name: '',
      color: 'bgcolor_f',
      url: '7'
    },
    {
      icon: 'call-outline',
      name: '',
      color: 'bgcolor_g',
      url: 'MyContactNumberPage'
    },{
      icon: 'paper-outline',
      name: '',
      color: 'bgcolor_d',
      url: 'MyAlipayPage'
    },{
      icon: 'hand-outline',
      name: '',
      color: 'bgcolor_a',
      url: 'MyQrscanPage'
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  doOperation(_page) {
      this.navCtrl.push(_page);
  }
}
