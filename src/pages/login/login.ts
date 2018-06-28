import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { MsgServiceProvider } from '../../providers/msg-service/msg-service';
import 'rxjs/add/operator/map';
import { TabsPage } from "../tabs/tabs";
//引入自定义组件模块


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

  constructor(public httpService: HttpServiceProvider, public config: ConfigProvider, public msgService:MsgServiceProvider,private navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    //是否拥有进入主页的权限
    var homeright=false;
    if (username.value.length == 0) {
      this.msgService.showToast("请输入员工编号!",3000);
    } else if (password.value.length == 0) {
      this.msgService.showToast("请输入员工密码!",3000);
    } else {

      /*调用登录接口*/
      this.httpService.doPost("Login/CheckLogin",{Account:username.value,Password:password.value},function(data){
        console.log(data);
        if(data.status==1){
          homeright=false;
        }else{
          homeright=true;
        }
      })

      setTimeout(() => {
        if(!homeright){
          this.msgService.showToast("账号或密码错误!",3000);
        }else{
          this.msgService.showLoading("登录成功,欢迎!",3000);
          //保存local账号密码
          localStorage.setItem('Account',username.value);
          localStorage.setItem('Password',password.value);
          //验证完成完成跳转
          this.navCtrl.push(TabsPage); 
        }
      }, 1000);
      
    }
  }
}
