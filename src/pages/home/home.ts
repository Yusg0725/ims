import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public newslist = [];
  public activitylist = [];
  gridList = [
    {
      icon: 'paper-outline',
      name: '日志',
      color: 'bgcolor_d',
      url: 'JournalPage'
    },
    {
      icon: 'hand-outline',
      name: '打卡',
      color: 'bgcolor_a',
      url: 'SigninPage'
    },
    {
      icon: 'people-outline',
      name: '公司通讯录',
      color: 'bgcolor_b',
      url: 'MyContactUserPage'
    }, 
    {
      icon: 'camera-outline',
      name: '照相机',
      color: 'bgcolor_c',
      url: 'MyCameraPage'
    },
    {
      icon: 'pin-outline',
      name: '扫一扫',
      color: 'bgcolor_d',
      url: 'MyQrscanPage'
    },
    {
      icon: 'image-outline',
      name: '上传头像',
      color: 'bgcolor_e',
      url: '6'
    }, {
      icon: 'ionitron-outline',
      name: '人脸识别',
      color: 'bgcolor_f',
      url: '7'
    },
    {
      icon: 'call-outline',
      name: '电话',
      color: 'bgcolor_g',
      url: 'MyContactNumberPage'
    }
  ]
  constructor(public appService: AppserviceProvider, public navCtrl: NavController) {
    //this.getNewList()//获取新闻列表
    this.getActivityList()//获取活动列表
  }

  getNewList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 1 }, "", "", (data) => {
      this.newslist = data[0];
    });
  }

  getActivityList() {
    const listurl = AppGlobal.API.getActivityList;
    this.appService.httpGet(listurl, { PageNum: 0, PageSize: 5, TypeId: 3 }, "", "", (data) => {
      this.activitylist = data[0];
    });
  }

  showDetail(flag, newsid) {
    switch (flag) {
      case 1:
      this.navCtrl.push('NewscontentPage', {
        edit: false,
        NewsId: newsid
      });
        break;
      case 3:
        this.navCtrl.push('SetActivityDetailPage', {
          edit: false,
          NewsId: newsid
        });
        break;
    }
  }
  goPage(page){
    this.navCtrl.push(page);
  }
}
