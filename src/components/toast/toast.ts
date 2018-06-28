import { Component } from '@angular/core';
import { MsgServiceProvider } from './../../providers/msg-service/msg-service';
/**
 * Generated class for the ToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toast',
  templateUrl: 'toast.html'
})
export class ToastComponent {

  active: boolean = false;
  message: string;

  constructor(private msgService:MsgServiceProvider) {
    //和服务之间的方法绑定关系
    this.msgService.showToast=this.show.bind(this);
  }
  //显示Toast提示信息
  show(msg,time){
    this.message=msg;
    this.active=true;

    setTimeout(() => {
      this.active=false;
    }, time);
  }

}
