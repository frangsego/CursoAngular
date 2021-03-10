import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { URL_PAISES } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  httpParams = new HttpParams().set('fields', 'name;capital;population;flag');

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {

    //const url = URL_PAISES + "?fields=name;capital;population;flag";
    
    const url = URL_PAISES;

    return this.http.get<Pais[]>( url, { params: this.httpParams } );

  }

}
