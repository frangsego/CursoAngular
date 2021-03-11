import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SOCKET } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = URL_SOCKET + '/grafica';
    return this.http.get ( url );
  }

  postData( len: string ) {
    const url = URL_SOCKET + '/grafica';
    return this.http.post  ( url, { lenguaje: len , valor: 1 } );
  }

}
