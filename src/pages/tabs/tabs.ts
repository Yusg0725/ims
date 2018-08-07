// import { Component } from '@angular/core';
import { Component,ChangeDetectorRef  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyPage } from '../my/my';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';

import {variable} from "../../util/globalVariable";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MyPage;
  tab3Root = SettingPage;
  public billCode:string="";
  public data:any=[];
  public isCheck:boolean=false;
  constructor(public navCtrl: NavController,public cd: ChangeDetectorRef) {

  }
  pushScan(){
    variable.isSweep=false;
    this.navCtrl.push("MyQrscanDetailPage");
  }
  //当将要进入页面时触发
  ionViewWillEnter(){
    this.data=variable.scanData;
    this.billCode=variable.scanTxt;
  }
}
