import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-set-activity-add',
  templateUrl: 'set-activity-add.html',
})
export class SetActivityAddPage {
  imgView: any = false;
  colorValue: any;
  colorList: any = ['#7E9DE7', '#F6C34C', '#46C6C8', '#FF6666', '#9CCC65', '#14c760', '#886aea', '#f3456d', '#f4d95b', 'f49930', 'f26d26', '#005e37', '#3eb866', '#f8e400', '#f26378', '#13dbad', 'ff7d48', 'a2ef54'];
  entity: any = {
    TypeId: 3,
    FullHead: "",
    FullHeadColor: "",
    Cover: "",
    AuthorName: "",
    SourceName: "",
    NewsContent: "",
    CreateDate: "",
    CreateUserId: "",
    CreateUserName: "",
    ModifyDate: "",
    ModifyUserId: "",
    ModifyUserName: "",
  }
  callback: any;
  fileTransfer: FileTransferObject = this.transfer.create();
  base64Image: string;
  constructor(public navCtrl: NavController,public navParams: NavParams,private camera: Camera,private transfer: FileTransfer,public appService: AppserviceProvider) {
    //获取父页面传过来的回调方法
    this.callback = this.navParams.get("callback");

    if (typeof (this.navParams.get("entity")) != "undefined") {
      this.entity = this.navParams.get("entity");
      if(this.entity.Cover!=""){
        this.imgView=true;
      }
    }

    this.appService.getItem(AppGlobal.cache.userObj, (data) => {
      this.entity.CreateUserId = data[0].UserId;
      this.entity.CreateUserName = data[0].RealName;
      if (this.entity != null) {
        this.entity.ModifyUserId = data[0].UserId;
        this.entity.ModifyUserName = data[0].RealName;
      }
    })
  }

  changecolorTitle() {
    document.getElementById("fullhead").style.color = this.colorList[this.colorValue];
    this.entity.FullHeadColor = this.colorList[this.colorValue];
  }

  saveForm() {
    this.appService.httpPost(AppGlobal.API.saveActivityForm, this.entity, "", "", (res) => {
      let param = "保存" + res;
      this.callback(param).then(() => {
      });
      // pop返回方法
      this.navCtrl.pop();
    }, false);
  }

  /**
   * 打开摄像头
   */
  openCamera(typecode) {
    const options: CameraOptions = {
      quality: 90,                                                   //相片质量 0 -100
      destinationType: this.camera.DestinationType.DATA_URL,        //DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,                                       //是否保存到相册
      sourceType: this.camera.PictureSourceType.CAMERA         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
    }
    if(typecode==2){
      options.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY;
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log("got file: " + imageData);
      this.base64Image = imageData;
      this.entity.Cover = 'data:image/jpeg;base64,' + this.base64Image;
      this.imgView=true;
    }, (err) => {
    });
  }
  //点击图片重新选择上传封面方式
  reloadImg(){
    this.imgView=false;
  }
}
