import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  gridList = [
    {
      icon: 'paper',
      name: '日志',
      color: '#CCC',
      url: '1'
    },
    {
      icon: 'hand',
      name: '打卡',
      color: '#CCC',
      url: '2'
    },
    {
      icon: 'contacts',
      name: '通讯录',
      color: '#CCC',
      url: 'MyContactUserPage'
    }, {
      icon: 'paper',
      name: '照相机',
      color: '#CCC',
      url: 'MyCameraPage'
    },
    {
      icon: 'hand',
      name: '定位',
      color: '#CCC',
      url: '5'
    },
    {
      icon: 'contacts',
      name: '上传头像',
      color: '#CCC',
      url: '6'
    }, {
      icon: 'paper',
      name: '人脸识别',
      color: '#CCC',
      url: '7'
    },
    {
      icon: 'hand',
      name: '邮箱',
      color: '#CCC',
      url: '8'
    },
    {
      icon: 'hand',
      name: '电话',
      color: '#CCC',
      url: 'MyContactNumberPage'
    }
  ]
  constructor(public navCtrl: NavController) {

  }
  /*
   * size : 一行分为size列
   * 原理  : 假设size=3，则【1,2,3,4,5,6,7,8,9】=>【1，2，3】,【4，5，6】,【7,8,9】
   * */
  getRowListByGridList(size) {
    var rowList = []
    for (var i = 0; i < this.gridList.length; i += size) {
      rowList.push(this.gridList.slice(i, i + size));
    }
    return rowList;
  }

  doOperation(_page) {
      this.navCtrl.push(_page);
  }
}
