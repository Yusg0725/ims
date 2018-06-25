import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
//引入http组件
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from "../tabs/tabs";
//引入toast模块
import { ToastController } from 'ionic-angular';
//模态模块
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public httpService: HttpServiceProvider, public config: ConfigProvider, public http: Http, private jsonp: Jsonp, public modalCtrl: ModalController, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
        let toast = this.toastCtrl.create({
          message: '请输入员工编号',
          duration: 3000,
          position: 'top'
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();
    } else if (password.value.length == 0) {
      let toast = this.toastCtrl.create({
        message: '请输入员工密码',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    } else {
      // let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      // console.log(userinfo);
    }
    this.httpService.doPost("Login/CheckLogin",{account:username.value,password:password.value},function(data){
      console.log(data);
    })
    // this.httpService.requestData('Login/CheckLogin?account='+username.value+'&password='+password.value,function(data){
    //   console.log(data);
    //   if(data.status==1){
    //     let toast = this.toastCtrl.create({
    //       message: '账号或密码错误-_-!',
    //       duration: 3000,
    //       position: 'top'
    //     });

    //     toast.onDidDismiss(() => {
    //       console.log('Dismissed toast');
    //     });

    //     toast.present();
    //   }else{
    //     let toast = this.toastCtrl.create({
    //       message: '登录成功,欢迎!',
    //       duration: 3000,
    //       position: 'top'
    //     });

    //     toast.onDidDismiss(() => {
    //       console.log('Dismissed toast');
    //     });

    //     //保存local账号密码
    //     localStorage.setItem('user',username.value);
    //     localStorage.setItem('psw',password.value);

    //     toast.present();
    //     //验证完成完成跳转
    //     this.navCtrl.push(TabsPage);
    //   }

    // })   
  }
}
