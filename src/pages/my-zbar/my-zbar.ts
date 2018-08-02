import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZBar,ZBarOptions } from '@ionic-native/zbar';

@IonicPage()
@Component({
  selector: 'page-my-zbar',
  templateUrl: 'my-zbar.html',
})
export class MyZbarPage {

  constructor(private zbar:ZBar,public navCtrl: NavController, public navParams: NavParams) {
    this.doScanner();
  }

  doScanner(){
    let options:ZBarOptions={
      text_title:"扫码",
      text_instructions:"请把相机对准二维码",
      camera:"back",
      flash:"auto",
      drawSight:true
    };
    this.zbar.scan(options)
    .then(result=>{
      alert(JSON.stringify(result));
    })
    .catch(error=>{
      console.log(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyZbarPage');
  }

}
