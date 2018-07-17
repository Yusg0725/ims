import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import { AppserviceProvider, AppGlobal } from '../../providers/appservice/appservice';

@IonicPage()
@Component({
  selector: 'page-my-camera',
  templateUrl: 'my-camera.html',
})
export class MyCameraPage {
  path: string='data:image/jpeg;base64,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';
  access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpLXJlc291cmNlIl0sInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwiZXhwIjoxNTA5MTk2OTcyLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiOWFmYmIyYWItMzdiYi00MTIyLTg2NDAtY2FmMDc1OTRmOGZkIiwiY2xpZW50X2lkIjoiY2xpZW50MiJ9.bJOpK0UjCI1ym32uerR_jKp4pv8aLaOxnTeK_DBjYZU';
  fileTransfer: FileTransferObject = this.transfer.create();
  base64Image:string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private transfer: FileTransfer,
     public appService: AppserviceProvider ) {
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
      this.path = 'data:image/jpeg;base64,' + this.base64Image;
      //this.upload();
    }, (err) => {
    });
  }


  /**
   * 文件上传
   */
  upload() {
    const apiPath = AppGlobal.API["upload"];
    this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
      let userId=data.UserId;
      this.appService.httpPost(apiPath,{UserId:userId,FilePath:this.base64Image,},"上传成功","上传失败",()=>{

      },true);
    });
    
  }


  /**
   * 文件下载
   */
  download() {
    const apiPath = AppGlobal.API["download"];
    this.appService.getItem(AppGlobal.cache["userObj"],(data)=>{
      let userId=data.UserId;
      this.appService.httpGet(apiPath,{userId:userId,fileName:'1.jpg'},"下载成功","下载失败",(data)=>{
        if (data.status ==0) {
          this.path = 'data:image/jpeg;base64,' + data.result;
        }
      },true);
    });
  }
}
