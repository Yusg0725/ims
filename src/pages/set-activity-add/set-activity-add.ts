import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-set-activity-add',
  templateUrl: 'set-activity-add.html',
})
export class SetActivityAddPage {
  colorValue: any;
  colorList: any = ['#7E9DE7', '#F6C34C', '#46C6C8', '#FF6666', '#9CCC65', '#14c760', '#886aea', '#f3456d', '#f4d95b', 'f49930', 'f26d26', '#005e37', '#3eb866', '#f8e400', '#f26378', '#13dbad', 'ff7d48', 'a2ef54'];
  entity: any = {
    TypeId: 3,
    FullHead: "",
    FullHeadColor: "",
    AuthorName: "",
    SourceName: "",
    NewsContent: "",
    CreateUserId: "",
    CreateUserName: "",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  changecolorTitle() {
    document.getElementById("fullhead").style.color = this.colorList[this.colorValue];
    this.entity.FullHeadColor = this.colorList[this.colorValue];
  }

  saveForm() {

  }

}
