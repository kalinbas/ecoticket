import { Injectable } from '@angular/core';

import { Api } from '../providers/api';

@Injectable()
export class Data {

    private userId: string;
    private data: any[];

    constructor(private api: Api) {

        this.data = [
            { fecha: "25.03.2016 10:31", lugar: "OXXO", monto: 132 },
            { fecha: "25.03.2016 10:22", lugar: "Sanborns", monto: 45 },
            { fecha: "25.03.2016 10:11", lugar: "7 Eleven", monto: 22 }
        ];

    }

    getUserId() {
        return this.userId;
    }

    getUserName() {
        return localStorage.getItem("userName");
    }

    tryGetUserIdFromStorage() {
        if (localStorage.getItem("userId")) {
            this.userId = localStorage.getItem("userId");
            return true;
        } else {
            return false;
        }
    }

    setUserId(id) {
        this.userId = id;
        localStorage.setItem("userId", id);
    }

    setUserName(name) {
        localStorage.setItem("userName", name);
    }
    
    getLatest() {
        return this.getAll();
    }

    getAll() {
        return this.api.get("API", "compras", { IdUsuario: this.userId }).then(data => {
            return data;
        });
    }

    add(form) {
        this.data.push({ fecha: form.fecha + " " + form.hora, lugar: form.lugar, monto: form.monto })
    }

}

