import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

import { Data } from '../../providers/data';

import { Messages } from '../../providers/messages'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeUrl: string;
  pagos: any[];
  user: any;
  interval:any;

  constructor(public navCtrl: NavController, private data: Data, private messages: Messages) {
    this.user = { name: this.data.getUserName() };
    this.barcodeUrl = "http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=" + this.data.getUserId() + "&qzone=1&margin=0&size=400x400&ecc=L";
  }

  ionViewWillEnter() {  
    this.loadData();
    this.interval = setInterval(() => {    
      this.loadData();
    }, 5000);
  }

  ionViewDidEnter() {
    setInterval(() => {    
      document.getElementById("custom-overlay").style.display = "none";
    }, 2000);
  }

  loadData() {
      this.data.getLatest().then(pagos => {
        this.pagos = pagos;
        this.messages.hideLoading();
      });
  }

  ionViewWillLeave() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;      
    }
  }

  openDetail(pago) {
    this.navCtrl.push(DetailPage, { pago: pago });
  }
}
