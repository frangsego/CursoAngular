import { Injectable } from '@angular/core';
import { TipoVehiculo } from '../models/tipo-vehiculo.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculosService {


  // No hace falta ponerlo , pero mejor lo dejamos.
  httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
       token: this.usuarioService.token,
    }
  );


  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
    ) {

    }

  // realmente la respuesto no es del todo así, porque vienen mas cosas.
  // por eso , utilizareé otro método
  // getTipoVehiculos(): Observable<TipoVehiculo[]> {

  //   const url = URL_SERVICIOS + '/tipovehiculo';

  //   return this.http.get<TipoVehiculo[]>( url );

  // }

  getTipoVehiculo( id: string ) {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + id ;
    return this.http.get( url, { headers: this.httpHeaders } );

  }


  getTiposVehiculo() {

    const url = URL_SERVICIOS + '/tipovehiculo';
    return this.http.get( url , { headers: this.httpHeaders } )
    .pipe (

      // se procesa antes de enviarlo al susbcriptor
      map( (resp: any) =>  {

        return resp.tipoVehiculos;

      }

      )
    );

  }

  guardarTipoVehiculo(tipoVehiculo: TipoVehiculo ) {

    let url = URL_SERVICIOS + '/tipovehiculo' ;

    if ( tipoVehiculo._id ) {
      url += '/' + tipoVehiculo._id;
      return this.http.put(url, tipoVehiculo , { headers: this.httpHeaders });
    } else {
      return this.http.post(url, tipoVehiculo , { headers: this.httpHeaders });
    }

  }

  borrarTipoVehiculo( id: string ) {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + id ;
    return this.http.delete( url, { headers: this.httpHeaders } );
  }


}