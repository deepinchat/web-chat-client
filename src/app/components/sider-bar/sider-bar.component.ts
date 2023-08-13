import { Component, OnInit } from '@angular/core';

enum SiderBarMenuType {
  chats = 'chats',
  contacts = 'contacts',
  profile = 'profile',
  settings = 'settings'
}

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss']
})
export class SiderBarComponent implements OnInit {
  currentMenu: SiderBarMenuType = SiderBarMenuType.chats;
  constructor() { }

  ngOnInit() {
  }

  onChangeTab(menu: string) {
    this.currentMenu = menu as SiderBarMenuType;
  }
}
