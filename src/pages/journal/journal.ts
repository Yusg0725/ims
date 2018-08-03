import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';
@IonicPage()
@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {
  public list = [];
  public page=0;
  public pagesize = 4;
  public pageNum=0;
  pagination: any;
  public result=false;
public JournaladdPage ='JournaladdPage';
   constructor(public appService: AppserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getList('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  getList(Infinite){
    //获取数据条数
    const numlist=AppGlobal.API.getDiaryCount;
    this.appService.httpGet(numlist,{},"","",(data)=>{
      this.pageNum=data[0][0]["num"];
    },false);
    //获取数据列表
    const listurl=AppGlobal.API.getDiaryList;
    this.appService.httpGet(listurl,{PageNum:this.page,PageSize:4},"请求成功","请求失败",(data)=>{
     
      if (data[0].length == 0 || data[0].length < this.pagesize)  {
        this.result=false;
     
      } else {
        this.result=true;
        this.page++;
      }
      for(var i=0;i<data[0].length;i++)
      {
        data[0][i].BeginTime=data[0][i].BeginTime.substring(11,16);
        data[0][i].EndTime=data[0][i].EndTime.substring(11,16);
        if(data[0][i].WorkSummary.length>14)
        {
          data[0][i].WorkSummary=data[0][i].WorkSummary.substring(0,14)+"...";
        }
      }
      this.list = this.list.concat(data[0]);
      console.log("data:"+data[0]);
      console.log("list:"+this.list);
      // this.list=this.list.unshift(data[0]) ;
   
    },true);
  }

  doRefresh(refresher) {
    
    setTimeout(() => {
      this.getList(refresher);
      refresher.complete();
    }, 2000);
  }
  presentConfirm(keyValue) {
    console.log(keyValue);
    this.appService.alert("确定删除这条日志吗?", () => {
      /*调用删除接口*/
      const url = AppGlobal.API["setDiaryDeleteform"];
      const userObj = this.appService.httpPost(url, { LogID: keyValue },
        "", "", (data) => {
          this.list = [];
          this.page=0;
          this.getList('');
          console.log(data);
        }, true);
    });
  }

  // getinfo() {
  //   console.log("进来了添加方法");
  //   this.navCtrl.push(this.JournaladdPage);
  // }
  openSearch(){

  }
}
