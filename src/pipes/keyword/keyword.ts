import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'keyword',
})
export class KeywordPipe implements PipeTransform {
  
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(val: string, keyword: string): any {
    let Reg = new RegExp(keyword, 'i');
    if(val) {
      let res = val.replace(Reg, `<span style="color:#338ec3;">${keyword?keyword:''}</span>`);
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}
