import { Http, Jsonp, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, ActionSheetController } from 'ionic-angular';

@Injectable()
export class AppGlobal {
    //缓存key的配置
    static cache: any = {
        userObj: "_userobj",
        homeRight: "_homeright",
        firstIn: "_firstIn"
    };
    //消息服务器地址
    static signalr="http://192.168.0.99:9595/signalr";//39.104.28.232:9595
    //文件服务地址
    static fileserver = "http://39.104.28.232:3200";
    //接口基础地址
    static domain = "http://39.104.28.232:3000";//http://118.190.96.161:8300
    //接口业务地址
    static API: any = {
        login: "/api/login/checklogin",
        getSlide: "/api/Home/GetSlides",
        upload: "/api/File/Upload",
        download: "/api/File/Download",

        getNews: "/api/news/getlist",
        newsSaveform: "/api/news/saveform",
        newsRemoveform: "/api/news/deleteform",
        newsInfo: "/api/news/getdetail",

        saveNoticeForm: "/api/news/saveform",
        getNoticeList: "/api/news/getlist",
        getNoticeForm: "/api/news/getdetail",
        deleteNotice: "/api/news/deleteform",

        getActivityNum: "/api/news/getcount",
        getActivityDetail: "/api/news/getdetail",
        getActivityList: "/api/news/getlist",
        saveActivityForm: "/api/news/saveform",
        deleteActivityForm: "/api/news/deleteform",

        getDiaryCount: "/api/diary/getcount",
        getDiaryList: "/api/diary/getlist",
        getDiaryDetail: "/api/diary/getdetail",
        setDiarySaveform: "/api/diary/saveform",
        setDiaryDeleteform: "/api/diary/deleteform",

        saveClock: "/api/clockin/saveform",
        deleteClock: "/api/clockin/deleteform",
        clockDetail: "/api/clockin/getdetail",
        clockList: "/api/clockin/getlist",
        clockCount: "/api/clockin/getcount",

    };
}
@Injectable()
export class AppserviceProvider {
    private headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });//x-www-form-urlencoded
    constructor(public http: Http, public jsonp: Jsonp, public loadingCtrl: LoadingController,
        private alertCtrl: AlertController, private toastCtrl: ToastController, private actionsheetCtrl: ActionSheetController) {

    }

    //对参数进行编码
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

    httpGet(url, params, smsg, fmsg, callback, loader: boolean = false) {
        let loading = this.loadingCtrl.create({ content: "加载中……" });
        if (loader) {
            loading.present();
        }
        this.http.get(AppGlobal.domain + url + this.encode(params))
            .toPromise()
            .then(res => {
                var d = JSON.parse(res["_body"]);//json字符串转化为对象y
                if (loader) {
                    if (d.length > 0) {
                        loading.setContent(smsg);
                    } else {
                        loading.setContent(fmsg);
                    }
                    setTimeout(() => {
                        loading.dismiss();
                    }, 2000);
                }
                callback(d == null ? "[]" : d);
            }).catch(error => {
                if (loader) {
                    loading.setContent("请求出现故障o(╥﹏╥)o");
                    setTimeout(() => {
                        loading.dismiss();
                    }, 2000);
                }
                this.handleError(error);
            });
    }

    httpPost(url, params, smsg, fmsg, callback, loader: boolean = false) {
        let loading = this.loadingCtrl.create({ content: "加载中……" });
        if (loader) {
            loading.present();
        }
        this.http.post(AppGlobal.domain + url, JSON.stringify(params), { headers: this.headers })
            .toPromise()
            .then(res => {
                var d = JSON.parse(res["_body"]);//json字符串转化为对象
                if (loader) {
                    if (d.length > 0 || d != null) {
                        loading.setContent(smsg);
                    } else {
                        loading.setContent(fmsg);
                    }
                    setTimeout(() => {
                        loading.dismiss();
                    }, 1500);
                }
                callback(d == null ? "[]" : d);
            }).catch(error => {
                if (loader) {
                    loading.setContent("请求出现故障o(╥﹏╥)o");
                    setTimeout(() => {
                        loading.dismiss();
                    }, 2000);
                }
                this.handleError(error);
            });
    }

    // //请求数据
    // requestData(apiUrl, callback) {
    //     var url: string;
    //     if (apiUrl.indexOf('?') == -1) {
    //     url = this.config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK';
    //     } else {
    //     url = this.config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK';
    //     }

    //     this.jsonp.get(url).subscribe(function (data) {
    //     console.log(data);
    //     callback(data['_body']);
    //     }, function (err) {
    //     console.log(err);
    //     })
    // }

    // doPost(apiUrl, json, callback) {
    //     var url= this.config.apiUrl + apiUrl;
    //     this.http.post(url,JSON.stringify(json), { headers: this.headers }).subscribe(function (res) {//JSON.stringify(
    //     callback(JSON.parse(res.json()));
    //     })
    // }

    private handleError(error: Response | any) {
        let msg = '';
        if (error.status == 400) {
            msg = '请求无效(code：404)';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在(code：404)';
            console.error(msg + '，请检查路径是否正确');
        }
        if (error.status == 500) {
            msg = '服务器发生错误(code：500)';
            console.error(msg + '，请检查路径是否正确');
        }
        console.log(error);
        if (msg != '') {
            this.toast(msg);
        }
    }

    alert(message, callback?) {
        if (callback) {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: [{
                    text: "确定",
                    handler: data => {
                        callback(1);
                    }
                }, {
                    text: "取消",
                    handler: data => {
                        callback(0);
                    }
                }]
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: ["确定"]
            });
            alert.present();
        }
    }

    prompt(input, message, callback?) {
        if (callback) {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                inputs: input,
                buttons: [{
                    text: "确定",
                    handler: data => {
                        callback(data);
                    }
                }, {
                    text: "取消",
                    handler: data => {
                        callback(0);
                    }
                }]
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: '提示',
                message: message,
                buttons: ["确定"]
            });
            alert.present();
        }
    }
    toast(message, callback?) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top',
            dismissOnPageChange: true,
        });
        toast.present();
        if (callback) {
            callback();
        }
    }

    loading(message, callback?) {
        let loading = this.loadingCtrl.create({
            content: message
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 2000);
        if (callback) {
            callback();
        }
    }

    actionsheet(title, buttons, callback?) {
        let _title = title;
        let _buttons = [];
        for (let index = 0; index < buttons.length; index++) {
            const _button = {
                id: "",
                text: "",
                role: null,
                icon: null,
                handler: () => { },
            }
            _button.text = buttons[index].text;
            _button.role = buttons[index].role;
            _button.icon = buttons[index].icon;
            _button.handler = () => {
                if (callback) {
                    callback(buttons[index].id);
                }
            };
            _buttons.push(_button);
        }
        let actionSheet = this.actionsheetCtrl.create({
            title: _title,
            cssClass: 'action-sheets-basic-page',
            buttons: _buttons
        });
        actionSheet.present();
    }
    setItem(key: string, obj: any) {
        try {
            var json = JSON.stringify(obj);
            window.localStorage[key] = json;
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    }
    getItem(key: string, callback) {
        try {
            var json = window.localStorage[key];
            var obj = null;
            if (json != null && typeof (json) != "undefined") {
                obj = JSON.parse(json);
            }
            callback(obj);
        }
        catch (e) {
            console.error("window.localStorage error:" + e);
        }
    }

}
