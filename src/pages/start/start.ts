import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'

import { Api } from '../../providers/api'
import { Data } from '../../providers/data'
import { Messages } from '../../providers/messages'

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  ages: number[];
  form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api, private data: Data, private messages: Messages) {
    this.form = {};
    this.ages = [];
    for (let i = 18; i < 100; i++) {
      this.ages.push(i);
    }
  }

  ionViewDidEnter() {
     setInterval(() => {    
      document.getElementById("custom-overlay").style.display = "none";
    }, 2000);
  }

  register() {
    this.messages.showLoading("Registrando").then(() => {
      this.api.post("API", "registro", { Nombre: this.form.name, Edad: this.form.age, Correo: this.form.email }).then(resp => {
        this.data.setUserId(resp);
        this.data.setUserName(this.form.name);
        this.navCtrl.push(TabsPage, null, { isNavRoot: true });
      });
    });

  }
}
