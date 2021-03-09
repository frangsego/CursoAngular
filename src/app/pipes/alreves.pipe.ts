import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreves'
})
export class AlrevesPipe implements PipeTransform {

  transform(value: string) {
    //console.log ( value ) ;
    return value.split('').reverse().join('');
  }

}
