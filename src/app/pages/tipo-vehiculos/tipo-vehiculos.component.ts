import { Component, OnInit } from '@angular/core';
import { TipoVehiculosService } from '../../services/tipovehiculos.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-tipo-vehiculos',
  templateUrl: './tipo-vehiculos.component.html',
  styleUrls: ['./tipo-vehiculos.component.css']
})
export class TipoVehiculosComponent implements OnInit {

  tiposVehiculo = [];

  constructor(private tvService: TipoVehiculosService,
    public usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.cargarTiposVehiculos();

  }

  cargarTiposVehiculos(){
    this.tvService.getTiposVehiculo().subscribe ( (resp: any) => {

      //console.log ( resp );

      this.tiposVehiculo = resp;
    
    }, error => {
      console.error ('¡No llegan los datos!')
    });
  }
}
