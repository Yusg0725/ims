import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MsgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsgServiceProvider {

  constructor() {
    
  }
  //对应Toast组件中的方法
  showToast(msg,time){

  }

  //对应Loading组件中的方法
  showLoading(msg,time){

  }

  //对应Alerts组件中的方法
  showAlerts(msg,time){

  }

  //对应ActionSheet组件中的方法
  showActionSheets(msg,time){

  }
}
