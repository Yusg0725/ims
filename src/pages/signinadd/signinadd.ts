import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { Http, Jsonp } from '@angular/http';

declare var BMap;
declare var BMAP_STATUS_SUCCESS;

@IonicPage()
@Component({
  selector: 'page-signinadd',
  templateUrl: 'signinadd.html',
})

export class SigninaddPage {
  
  @ViewChild('map2') map_container: ElementRef;
  
  map: any;//地图对象
  marker: any;//标记
  geolocation1: any;
  myIcon: any;
  mapjd: any;
  mapwd: any;
  circle: any;
  companypoint: any;
  locationName: any;

  obj = {
    buildName: "",
    detailRoldName: "",
    longitude:"",
    latitude:""
  }

  user = {
    userid:"",
    username:""
  }
  
  /**
   * GPS定位
   */
  mOption = {
    poiRadius: 1000,           //半径为1000米内的POI,默认100米
    numPois: 20,                //列举出50个POI,默认10个
  }

  list=[];

  constructor(public jsonp: Jsonp, public http: Http, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public geolocation: Geolocation, public appService: AppserviceProvider) {
    this.obj = {buildName: "",detailRoldName: "",longitude:"",latitude:""}
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }


  ionViewDidEnter() {
    //获取当前登陆人信息
    this.appService.getItem(AppGlobal.cache["userObj"], (data) => {
      this.user.userid = data[0].UserId;
      this.user.username = data[0].RealName;
    });
    this.obj = {buildName: "",detailRoldName: "",longitude:"",latitude:""}
    let map =
      this.map =
      new BMap.Map(
        this.map_container.nativeElement,
        {
          enableMapClick: true,//点击拖拽
          enableScrollWheelZoom: true,//启动滚轮放大缩小，默认禁用
          enableContinuousZoom: true //连续缩放效果，默认禁用
        }
      );//创建地图实例

    this.getLocationByBrowser();//浏览器定位
    // this.getLocation();//GPS定位
    let point = new BMap.Point(this.mapjd, this.mapwd);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    map.centerAndZoom(point, 18);//设置中心和地图显示级别

  }


  /**
   * 浏览器定位
   */
  getLocationByBrowser() {
    var _that = this;
    let geolocation1 = this.geolocation1 = new BMap.Geolocation();
    geolocation1.getCurrentPosition((r) => {;
      if (geolocation1.getStatus() == BMAP_STATUS_SUCCESS) {
      this.jsonp.get('http://api.map.baidu.com/geoconv/v1/?coords=116.420954%2C39.854543&from=1&to=5&ak=MmbkWbAvethgYASjVjHGe0mOd6APLrcU&callback=JSONP_CALLBACK').subscribe(
        function (data) {
            _that.mapjd = data['_body']['result'][0].x;
            _that.mapwd = data['_body']['result'][0].y;
            new BMap.Geocoder().getLocation(new BMap.Point(_that.mapjd, _that.mapwd), function (rs) {
              var allPois = rs.surroundingPois;       //获取全部POI（该点半径为100米内有6个POI点）
              var thispoint  = new BMap.Point(_that.mapjd, _that.mapwd);
              let marker = _that.marker = new BMap.Marker(thispoint, { icon: _that.myIcon });
              _that.map.addOverlay(marker);
              _that.map.panTo(new BMap.Point(_that.mapjd, _that.mapwd), 16);
              for (var i = 0; i < allPois.length; ++i) {
                _that.obj = {
                  buildName: "",
                  detailRoldName: "",
                  longitude:"",
                  latitude:""
                }
                _that.obj.buildName = allPois[i].title;
                _that.obj.detailRoldName = allPois[i].address;
                _that.obj.longitude = allPois[i].point.lng;
                _that.obj.latitude = allPois[i].point.lat;
                _that.list = _that.list.concat(_that.obj);
              }
              _that.obj = {buildName: "",detailRoldName: "",longitude:"",latitude:""}
            }, _that.mOption);
        }, function (error) {
          console.log(error);
        }
      );
      } else {
        console.log('failed' + this.geolocation1.getStatus());
      }
    }, { enableHighAccuracy: false })
  }



  getLocation() {
    var _that = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      let locationPoint = new BMap.Point(resp.coords.longitude, resp.coords.latitude);
      let convertor = new BMap.Convertor();
      let pointArr = [];
      pointArr.push(locationPoint);
      convertor.translate(pointArr, 1, 5, (data) => {
        if (data.status === 0) {
          let marker = this.marker = new BMap.Marker(data.points[0], { icon: this.myIcon });
          this.map.panTo(data.points[0]);
          marker.setPosition(data.points[0]);
          this.map.addOverlay(marker);
        }
        _that.jsonp.get('http://api.map.baidu.com/geoconv/v1/' + this.encode({ coords: resp.coords.longitude + "," + resp.coords.latitude, from: 1, to: 5, ak: 'MmbkWbAvethgYASjVjHGe0mOd6APLrcU' }))
        .subscribe(res => {
          _that.mapjd = res['_body']['result'][0].x;
          _that.mapwd = res['_body']['result'][0].y;
          new BMap.Geocoder().getLocation(new BMap.Point(_that.mapjd, _that.mapwd), function (rs) {
            var allPois = rs.surroundingPois;       //获取全部POI（该点半径为100米内有6个POI点）
            var thispoint  = new BMap.Point(_that.mapjd, _that.mapwd);
            let marker = _that.marker = new BMap.Marker(thispoint, { icon: _that.myIcon });
            _that.map.addOverlay(marker);
            _that.map.panTo(new BMap.Point(_that.mapjd, _that.mapwd), 16);
            for (var i = 0; i < allPois.length; ++i) {
              _that.obj = {
                buildName: "",
                detailRoldName: "",
                longitude:"",
                latitude:""
              }
              _that.obj.buildName = allPois[i].title;
              _that.obj.detailRoldName = allPois[i].address;
              _that.obj.longitude = allPois[i].point.lng;
              _that.obj.latitude = allPois[i].point.lat;
              _that.list = _that.list.concat(_that.obj);
            }
            _that.obj = {buildName: "",detailRoldName: "",longitude:"",latitude:""}
          }, _that.mOption);
        },error => {
            console.log("========   error " + error);
        })
      })
    })
  }


  encode(params) {
    var str = '';
    if (params) {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var value = params[key];
          str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
      }
      str = '?' + str.substring(0, str.length - 1);
    }
    return str;
  }


 
  signSubmit() {
    var clock = this.obj;
    const url=AppGlobal.API["saveClock"];
    this.appService.httpPost(url,{ClockLng:clock.longitude,ClockLat:clock.latitude,ClockLocation:clock.detailRoldName,
      ClockAddress:clock.buildName,CreateUserId:this.user.userid,CreateUserName:this.user.username},
    "保存成功","保存失败",(data)=>{
      console.log("data  "+data);
      this.navCtrl.push('SigninPage');
    },false);
  }


  setClock(ss){
    this.obj = ss;
    let point = new BMap.Point(ss.longitude, ss.latitude);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    this.map.centerAndZoom(point, 20);//设置中心和地图显示级别
    console.log(this);
  }






}
