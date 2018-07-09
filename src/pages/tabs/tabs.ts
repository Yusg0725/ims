import { Component } from '@angular/core';

import { MyPage } from '../my/my';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MyPage;
  tab3Root = SettingPage;

  constructor() {

  }
}
