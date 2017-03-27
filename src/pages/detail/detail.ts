import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  pago: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pago = navParams.get("pago");
  }

  ionViewDidLoad() {
    
  }

}
