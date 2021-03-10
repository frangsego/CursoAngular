import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.models';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  desde = 0;
  total = 0;

  constructor(private clienteService: ClienteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes () {
    this.clienteService.getClientes(this.desde)
      .subscribe ( (resp: any) => { 
        // console.log ( resp );
        this.clientes = resp.clientes;
        this.total = resp.total;
   })
  }

  cambiarDesde ( indice: number ) {
    const desde = this.desde + indice;
    if (desde >= this.total ) {
      Swal.fire ('Clientes', 'No hay más registros', 'info');
      return;
    }

    if (desde < 0) {
      Swal.fire ('Clientes', 'Ya se encuentra al principio', 'info');
      return;
    }

    this.desde += indice;
    this.cargarClientes();
  }

  borrarCliente(cliente: Cliente) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Va a borrar a ${cliente.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí. Bórralo'
    }).then((result) => {
      if (result.isConfirmed) {

        this.clienteService.borrarCliente( cliente._id )
        .subscribe( (resp: any) => {

          if ( resp.ok ) {
            this.openSnackBar('Borrado cliente ' + cliente.nombre);
          } else {
            this.openSnackBar('Error');
          }

          this.cargarClientes();

        });
       
      }

    })
  }

  openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Hecho', {
      duration: 2000,
    });
  }
}
