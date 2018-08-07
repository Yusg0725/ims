import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {variable} from "../../util/globalVariable";

@IonicPage()
@Component({
  selector: 'page-my-qrscan',
  templateUrl: 'my-qrscan.html',
})
export class MyQrscanPage {
  public billCode:string="";
  public data:any=[];
  public isCheck:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
