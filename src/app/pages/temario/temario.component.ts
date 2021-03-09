import { Component, OnInit, OnDestroy } from '@angular/core';

import { TemarioService } from '../../services/temario.service';
import { Tema } from '../../interfaces/tema.interface';


@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})

export class TemarioComponent implements OnInit, OnDestroy {

  constructor(private temarioService: TemarioService) { }

  temas: Tema[] = [];

  meGustan = 0;

//  paises: any[] = [];

  ngOnInit(): void {

    this.temas = this.temarioService.getTemario();
//    console.log('Iniciado componente temario');
//    console.log(this.temas);

//    this.temarioService.getPaises().subscribe( resp => {
//        console.log( 'Esto llega sobre los paises: ', resp)
//    })

  }

  
  ngOnDestroy(): void {
//    console.log('Destruido componente temario');

  }

  eventoMeGustaRecibido( evento: number ){
    this.meGustan = this.meGustan + evento;
  }

}
