import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../../environments/environment';
import { Cliente } from '../models/cliente.models';
import { SubirArchivoService } from './subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  headers = new HttpHeaders ( {
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient, private subirArchivoService: SubirArchivoService) { }


  getClientes(desde: number = 0) {

    const url = URL_SERVICIOS + `/cliente?limite=5&desde=${desde}`;
  
    return this.http.get ( url, { headers: this.headers } );
  
  }

  borrarCliente ( id: string ) {

    const url = URL_SERVICIOS + `/cliente/${id}`;

    return this.http.delete (url, { headers: this.headers } );

  }

  guardarCliente( cliente: Cliente): Observable<any> {

    let url = URL_SERVICIOS + '/cliente';

    if ( cliente._id ){
      url += '/' + cliente._id;
      return this.http.put( url, cliente, { headers: this.headers} );
    } else {

      return this.http.post( url, cliente, { headers: this.headers} );
    }

  }

  getCliente( id: string ): Observable<any> {

    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.get( url );
    
  }

  
  cambiarImagen( archivo: File, id: string ) {

    return this.subirArchivoService.subirArchivo( archivo , 'clientes', id );
    
  }

}
