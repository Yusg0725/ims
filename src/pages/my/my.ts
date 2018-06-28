import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {
  gridList= [
    {
      icon:'paper',
      name: '日志',
      color: '#CCC'
    },
    {
      icon:'hand',
      name: '打卡',
      color: '#CCC'
    },
    {
      icon:'contacts',
      name: '通讯录',
      color: '#CCC'
    },{
      icon:'paper',
      name: '日志',
      color: '#CCC'
    },
    {
      icon:'hand',
      name: '打卡',
      color: '#CCC'
    },
    {
      icon:'contacts',
      name: '通讯录',
      color: '#CCC'
    },{
      icon:'paper',
      name: '日志',
      color: '#CCC'
    },
    {
      icon:'hand',
      name: '打卡',
      color: '#CCC'
    },
    {
      icon:'contacts',
      name: '通讯录',
      color: '#CCC'
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
}
