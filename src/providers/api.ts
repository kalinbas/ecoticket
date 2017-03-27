import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, URLSearchParams, Headers } from '@angular/http';

import {Config} from 'ionic-angular';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import {Messages} from './messages';

@Injectable()
export class Api {

    constructor(private http: Http, private config: Config, private messages: Messages) {

    }

    get(resource: string, method: string, params?: any) {

        let url = this.config.get("apiServerUrl") + "/" + resource + "/" + method;

        let opt: RequestOptionsArgs = {
            search: this.createSearchParams(params)
        }

        return this.http.get(url, opt).map((response) => {
            return response.json()
        }).toPromise().catch(error => {
            this.handleError(error);

            // don't let it continue - reject this promise
            throw error;
        });
    }

    post(resource: string, method: string, body: any, params?: any, ignoreError?: boolean) {

        let url = this.config.get("apiServerUrl") + "/" + resource + "/" + method;

        let opt: RequestOptionsArgs = {
            search: this.createSearchParams(params),
            //headers : new Headers()
        }
       
        //opt.headers.set("Content-Type", "application/x-www-form-urlencoded");

        let formData = this.createSearchParams(body);
      
        return this.http.post(url, formData.toString(), opt).map((response) => {
            // if no content returned
            if (response.status === 204) {
                return;
            } else {
                return response.json();
            }
        }).toPromise().catch(error => {
            if (!ignoreError) {
                this.handleError(error);

                // don't let it continue - reject this promise
                throw error;
            }
        });
    }

    private handleError(error: any) {
   
        // hide loading screen if was displayed
        this.messages.hideLoading().then(() => {
          
        });
    }

    private createSearchParams(params: any): URLSearchParams {
        let sp = new URLSearchParams();

        if (params) {
            for (var key in params) {
                sp.set(key, params[key]);
            }
        }

        return sp;
    }

    private createFormData(params: any) {

         let data = new FormData();

         if (params) {
            for (var key in params) {
                data.append(key, params[key]);
            }
        }

        return data;

    }
}

