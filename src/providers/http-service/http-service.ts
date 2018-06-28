import { Injectable } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  private headers =new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  //application/json;application/x-www-form-urlencoded;text/plain;
  constructor(private http:Http,private jsonp:Jsonp, public config: ConfigProvider) {
    console.log('Hello HttpServiceProvider Provider');
  }
  //请求数据
  requestData(apiUrl, callback) {
    var url: string;
    if (apiUrl.indexOf('?') == -1) {
      url = this.config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK';
    } else {
      url = this.config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK';
    }

    this.jsonp.get(url).subscribe(function (data) {
      console.log(data);
      callback(data['_body']);
    }, function (err) {
      console.log(err);
    })
  }

  doPost(apiUrl, json, callback) {
    var url= this.config.apiUrl + apiUrl;
    this.http.post(url,JSON.stringify(json), { headers: this.headers }).subscribe(function (res) {//JSON.stringify(
      callback(JSON.parse(res.json()));
    })
  }
  
}
