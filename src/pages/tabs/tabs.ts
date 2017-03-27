import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = ListPage;
  tab3Root: any = AddPage;

  constructor() {

  }
}
