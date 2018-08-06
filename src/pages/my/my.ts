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
      name: '日志',
      color: 'bgcolor_d',
      url: 'JournalPage'
    },
    {
      icon: 'hand-outline',
      name: '打卡',
      color: 'bgcolor_a',
      url: '2'
    },
    {
      icon: 'people-outline',
      name: '联系人',
      color: 'bgcolor_b',
      url: 'MyContactUserPage'
    }, 
    {
      icon: 'camera-outline',
      name: '照相机',
      color: 'bgcolor_c',
      url: 'MyCameraPage'
    },
    {
      icon: 'pin-outline',
      name: '定位',
      color: 'bgcolor_d',
      url: '5'
    },
    {
      icon: 'image-outline',
      name: '上传头像',
      color: 'bgcolor_e',
      url: '6'
    }, {
      icon: 'ionitron-outline',
      name: '人脸识别',
      color: 'bgcolor_f',
      url: '7'
    },
    {
      icon: 'call-outline',
      name: '电话',
      color: 'bgcolor_g',
      url: 'MyContactNumberPage'
    },{
      icon: 'paper-outline',
      name: '支付宝',
      color: 'bgcolor_d',
      url: 'MyAlipayPage'
    },{
      icon: 'hand-outline',
      name: '扫一扫',
      color: 'bgcolor_a',
      url: 'MyZbarPage'
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  doOperation(_page) {
      this.navCtrl.push(_page);
  }
}
