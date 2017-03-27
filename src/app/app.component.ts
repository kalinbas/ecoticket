import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StartPage } from '../pages/start/start';
import { TabsPage } from '../pages/tabs/tabs';

import { Data } from '../providers/data';

import { HeaderColor } from '@ionic-native/header-color';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, data: Data, headerColor: HeaderColor) {

     if (data.tryGetUserIdFromStorage()) {
        this.rootPage = TabsPage;
      }

    platform.ready().then(() => {
      headerColor.tint("#363748");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();     
    });
  }
}
