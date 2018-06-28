import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  //api请求地址
  public apiUrl="http://118.190.96.161:8300/api/";//http://118.190.96.161:8300/api/

  constructor(public http: Http) {
    console.log('Hello ConfigProvider Provider');
  }

}
