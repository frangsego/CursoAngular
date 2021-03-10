import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  headers = new HttpHeaders ( {
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }


  getClientes(desde: number = 0) {

    const url = URL_SERVICIOS + `/cliente?limite=5&desde=${desde}`;
  
    return this.http.get ( url, { headers: this.headers } );
  
  }

  borrarCliente ( id: string ) {

    const url = URL_SERVICIOS + `/cliente/${id}`;

    return this.http.delete (url, { headers: this.headers } );

  }
}
