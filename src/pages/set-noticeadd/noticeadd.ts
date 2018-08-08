import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppserviceProvider,AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-noticeadd',
  templateUrl: 'noticeadd.html',
})
export class NoticeaddPage {

  public notice = {
    NewsId:"",//主键
    TypeId:2,//类型  1新闻，2公告，3活动
    ParentId:"", //父级主键
    Category:"", //所属类别
    FullHead:"", //完整标题
    FullHeadColor:"", //标题颜色
    BriefHead:"", //简略标题
    AuthorName:"", //作者
    CompileName:"", //编辑
    TagWord:"", //Tag词
    Keyword:"", //关键字
    SourceName:"", //来源
    SourceAddress:"", //来源地址
    NewsContent:"", //新闻内容
    PV:"", //浏览量
    ReleaseTime: "", //发部时间 filter('date')(Date(), 'yyyy-MM-dd HH:mm:ss')
    SortCode:"",  //排序码
    Cover:"" //封面
  }

  public firsttitle=""; //主标题
  public secondtitle = ""; //副标题
  public content = ""; //富文本编辑器的内容
  public RealName = "";
  colorValue: any;
  colorList: any = ['#7E9DE7', '#F6C34C', '#46C6C8', '#FF6666', '#9CCC65', '#14c760', '#886aea', '#f3456d', '#f4d95b', 'f49930', 'f26d26', '#005e37', '#3eb866', '#f8e400', '#f26378', '#13dbad', 'ff7d48', 'a2ef54'];

  constructor(public appService: AppserviceProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.content);
  }

  ionViewDidLoad() {
    this.firsttitle = this.navParams.get('firsttitle');
    this.secondtitle = this.navParams.get('secondtitle');
    this.content = this.navParams.get('content');
    
    this.appService.getItem(AppGlobal.cache["userObj"], (data) => {
      this.notice.AuthorName = data[0].RealName;
    });
  }

  submitnotice(){
    if(!this.checked()){
      return false;
    }
    const url=AppGlobal.API["saveNoticeForm"];
    this.appService.httpPost(url,this.notice,"保存成功","保存失败",(data)=>{
      console.log("data  "+data);
      this.navCtrl.push('NoticePage');
    },false);
  }

  // 验证是否为空
  public checked(){
    if (this.notice.FullHead.length == 0) {
      this.appService.toast("请输入主标题!");
      return false;
    } else if (this.notice.BriefHead.length == 0) {
      this.appService.toast("请输入副标题!");
      return false;
    } else if (this.notice.NewsContent.length == 0) {
      this.appService.toast("请输入公告内容!");
      return false;
    }
    return true;
  }

  changecolorTitle() {
    document.getElementById("fullhead").style.color = this.colorList[this.colorValue];
    this.notice.FullHeadColor = this.colorList[this.colorValue];
  }




}
