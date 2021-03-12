import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): string {

    let url = URL_SERVICIOS + '/imagen';

    if ( !img ) {
      // devuelvel la imagen por defecto
      return url + '/usuarios/xxx';
    }

    return img;

  }

}