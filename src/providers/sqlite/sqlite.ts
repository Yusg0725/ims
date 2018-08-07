import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Injectable()
export class SqliteProvider {
   myAppDatabase: SQLiteObject;
   public insertresult:any;
   public selectresult:any;
   public updateresult:any;
   public deleteresult:any;
  constructor(public http: HttpClient,private sqlite: SQLite) {
    debugger;
    this.initDatabase();
  }

  initDatabase() {
    // this.sqlite.create({
    //   name: 'myApp.db',
    //   location: 'default'
    // }).then((database: SQLiteObject) => {
    //   debugger;
    //   database.executeSql('CREATE TABLE IF NOT EXISTS Log(LogID VARCHAR(50) PRIMARY KEY, ProContract VARCHAR(50) NOT NULL, LogDate datetime NOT NULL, BeginTime datetime, EndTime datetime, WorkSummary text, ProContractID varchar(50), Remark text);').then(() => console.log('init database successfully')).catch(e => console.log("失败了："+e));
    //   this.myAppDatabase = database;
    // })
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table danceMoves(name VARCHAR(32))')
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e+"111111111111111"));
    
    
      })
      .catch(e => console.log(e));
  }
  AddLogTable(LogEntity) {
    this.insertresult= this.myAppDatabase.executeSql('INSERT INTO Log VALUES (LogID,ProContract, LogDate, BeginTime, EndTime, WorkSummary, ProContractID, Remark);', [LogEntity.LogID,LogEntity.ProContract, LogEntity.LogDate, LogEntity.BeginTime, LogEntity.EndTime, LogEntity.WorkSummary, LogEntity.ProContractID, LogEntity.Remark]).then(() => console.log('添加成功')).catch(e => console.log(e));
  }

  GetLogTable() {
    this.selectresult= this.myAppDatabase.executeSql('SELECT * FROM Log;').then(() => console.log('查询成功')).catch(e => console.log(e));
  }

  UpdateLogTable(LogEntity) {
    this.updateresult= this.myAppDatabase.executeSql('UPDATE Log SET ProContract=?, LogDate=?, BeginTime=?, EndTime=?, WorkSummary=?, ProContractID=?, Remark=? WHERE LogID=?;', [LogEntity.ProContract, LogEntity.LogDate, LogEntity.BeginTime, LogEntity.EndTime, LogEntity.WorkSummary, LogEntity.ProContractID, LogEntity.Remark,LogEntity.LogID]).then(() => console.log('修改成功')).catch(e => console.log(e));
  }
  DelLogTable(logid)
  {
    this.deleteresult= this.myAppDatabase.executeSql("delete from log where LogID=?",[logid]).then(() => console.log('删除成功')).catch(e => console.log(e));
  }
 

}
