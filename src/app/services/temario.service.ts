//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TEMARIO } from '../data/datostemario.json';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  constructor () {
//  constructor(private http: HttpClient) {

    console.log('Iniciando el servicio Temario');
   }

   getTemario() {
     return TEMARIO;
   }


//   getPaises () {

//    const url = "https://restcountries.eu/rest/v2/all";

//    return this.http.get( url );   // devuelve un "observable"

//   }
}
