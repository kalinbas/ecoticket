import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';


import { Data } from '../../providers/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  pagos: any[];

  constructor(public navCtrl: NavController, private data: Data) {
    data.getAll().then(pagos => {
      this.pagos = pagos;
    })
  }

  openDetail(pago) {
    this.navCtrl.push(DetailPage, { pago: pago });
  }

}
