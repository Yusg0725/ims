import { Component } from '@angular/core';
import { MsgServiceProvider } from './../../providers/msg-service/msg-service';
/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent {

  active: boolean = false;
  message: string;
  constructor(private msgService:MsgServiceProvider) {
    //和服务之间的方法绑定关系
    this.msgService.showLoading=this.show.bind(this);
  }

  //显示Loading提示信息
  show(msg,time){
    this.message=msg;
    this.active=true;

    setTimeout(() => {
      this.active=false;
    }, time);
  }
}
