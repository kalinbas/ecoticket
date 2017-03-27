import {Injectable} from '@angular/core';

import {App, AlertController, Loading, LoadingController, ToastController, ModalController} from 'ionic-angular';

import {Badge} from '@ionic-native/badge';

@Injectable()
export class Messages {

   
    loading: Loading = null;
    isLoadingDismissing: boolean = false;

    constructor(private app: App, private modalCtrl: ModalController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private badge: Badge) {
        
    }
     
    showLoading(message: string): Promise<any> {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: message
            });            
            return this.loading.present();
        } else {
            return Promise.resolve();        
        }
    }

    hideLoading(): Promise<any> {
        if (this.loading) {
            var l = this.loading;
            this.loading = null;
            return l.dismiss();
        } else {
            return Promise.resolve();  
        }
    }

  
    showToast(message: string): Promise<any> {

        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });

        return toast.present();
    }

    updateBadge(count?: number): Promise<any> {
        if (count && count > 0) {
            return this.badge.set(count);
        } else {
            return this.badge.clear();
        }
    }
}
