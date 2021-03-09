import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() dato: any;
  @Input() cabecera: string = 'No viene cabecera';
  @Input() numero = 0;

  @Output() eventoMeGusta: EventEmitter<number> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  meGusta (){
    this.eventoMeGusta.emit(1);
    console.log ('Pulsado botón Me gusta');
  }

}
