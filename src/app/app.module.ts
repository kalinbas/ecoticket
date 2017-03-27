import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StartPage } from '../pages/start/start';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { TabsPage } from '../pages/tabs/tabs';

import { ListItemComponent } from '../components/list-item/list-item';

import { Api } from '../providers/api';
import { Data } from '../providers/data';
import { Messages } from '../providers/messages';

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Badge } from '@ionic-native/badge';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HeaderColor } from '@ionic-native/header-color';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    AddPage,
    HomePage,
    TabsPage,
    StartPage,
    DetailPage,
    ListItemComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      apiServerUrl:  'http://ecoticket.mx' // 'http://localhost:8100' // 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    AddPage,
    HomePage,
    TabsPage,
    StartPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Badge,
    BarcodeScanner,
    HeaderColor,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api, Data, Messages
  ]
})
export class AppModule { }
