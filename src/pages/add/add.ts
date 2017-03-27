import { Component } from '@angular/core';

import { NavController, Tabs } from 'ionic-angular';

import { Data } from '../../providers/data';

import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  form: any;

  constructor(public navCtrl: NavController, public tabs: Tabs, private data: Data, private camera: Camera, private barcodeScanner: BarcodeScanner) {
    this.form = {};
  }

  save() {
    this.data.add(this.form);
    this.tabs.select(0);
    this.form = {};
  }

  takePicture() {
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        correctOrientation: true
    }).then((imageData) => {
        // imageData is a base64 encoded string
        this.form.image = "data:image/jpeg;base64," + imageData;

        // autofill values (MAGIC todo)
        this.form.fecha = new Date().toJSON().slice(0,10);
        this.form.hora = "14:00";
        this.form.monto = "113";
        this.form.lugar = "OXXO";
    }, (err) => {
        console.log(err);
    });
  }

  scanQR() {
    this.barcodeScanner.scan({ resultDisplayDuration: 0, prompt: 'Escanear código QR del recibo'}).then(result => {
      if (!result.cancelled) {
        //result.text
      }
    });
  }
}
