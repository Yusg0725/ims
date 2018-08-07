import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
import { NewsaddPage } from '../newsadd/newsadd';
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public list = [];
  public count = 0;
  public page = 0;
  public pagesize = 9;
  public result = false;

  pagination: any;
  NewsaddPage:any=NewsaddPage;
  NewscontentPage: any = 'NewscontentPage';

  constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.refresh('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  refresh(Infinite) {
    this.pagination = { "page": this.page, "records": 0, "rows": 20 };

    /*调用获取列表接口*/
    const url = AppGlobal.API["getNews"];
    const userObj = this.appService.httpGet(url, { PageSize: this.pagesize, PageNum: this.page, TypeId: 1 },
      "", "获取失败", (data) => {
        console.log(data);
        if (data[0].length == 0 || data[0].length < this.pagesize) {
          Infinite.enable(false);

        } else {

          this.page++;

          this.list = this.list.concat(data[0]);
          console.log("list:" + this.list);
        }

      }, true);
    if (Infinite) {
      Infinite.complete();
    }


  }
  doRefresh(Infinite) {
    setTimeout(() => {
      this.refresh(Infinite);
    }, 1000);

  }

  //   getInfo(keyValue)
  //   {
  // this.navCtrl.push()

  //   }
  presentConfirm(keyValue) {
    console.log(keyValue);
    this.appService.alert("确定删除这条新闻吗?", () => {
      /*调用删除接口*/
      const url = AppGlobal.API["newsRemoveform"];
      const userObj = this.appService.httpPost(url, { NewsId: keyValue },
        "删除成功", "删除失败", (data) => {
          this.list = [];
          this.page = 0;
          this.refresh("");
          console.log(data);
        }, true);
    });
  }

  getinfo() {
    this.navCtrl.push('NewsaddPage');
  }
}
