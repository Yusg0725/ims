import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyCameraPage } from '../my-camera/my-camera';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {
  gridList= [
    {
      icon:'paper',
      name: '日志',
      color: '#CCC',
      url:''
    },
    {
      icon:'hand',
      name: '打卡',
      color: '#CCC',
      url:''
    },
    {
      icon:'contacts',
      name: '通讯录',
      color: '#CCC',
      url:''
    },{
      icon:'paper',
      name: '照相机',
      color: '#CCC',
      url:''
    },
    {
      icon:'hand',
      name: '定位',
      color: '#CCC',
      url:''
    },
    {
      icon:'contacts',
      name: '上传头像',
      color: '#CCC',
      url:''
    },{
      icon:'paper',
      name: '人脸识别',
      color: '#CCC',
      url:''
    },
    {
      icon:'hand',
      name: '邮箱',
      color: '#CCC',
      url:''
    },
    {
      icon:'contacts',
      name: '通讯录',
      color: '#CCC',
      url:''
    }
    ]

  constructor(public navCtrl: NavController) {

  }
  /*
   * size : 一行分为size列
   * 原理  : 假设size=3，则【1,2,3,4,5,6,7,8,9】=>【1，2，3】,【4，5，6】,【7,8,9】
   * */
  getRowListByGridList(size) {
    console.log('网格集合', this.gridList)
    var rowList = []
    for (var i = 0; i < this.gridList.length; i += size) {
      rowList.push(this.gridList.slice(i, i + size));
    }
    return rowList;
  }

  doOperation(){
    debugger;
    this.navCtrl.push(MyCameraPage);
  }
}
