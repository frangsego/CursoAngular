import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../../models/cliente.models';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  tituloBoton = 'Crear';
  guardando = false;

  cliente: Cliente = new Cliente ('', '', '');

  imagenSubir: File;
  imagenTemp: any;

  constructor(private activatedRoute: ActivatedRoute, 
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe ( params => {

      const id = params['id'];

      if (id !== 'nuevo') {
        this.tituloBoton = 'Actualizar';

        // Llamar al servicio para traer el cliente completo
        this.clienteService.getCliente( id )
        .subscribe ( resp => {
          this.cliente = resp.cliente;
        });
      }
      
      //console.log( params);
  
    })

  }

  guardarCliente(formu: NgForm){
    //console.log ( "Llega: " + formu );

    if (formu.valid){
      // Llamar al servicio para guardar el cliente
      this.guardando = true;
      this.clienteService.guardarCliente ( this.cliente )
      .subscribe (resp => {

        //console.log ( resp );
        this.guardando = false;
        Swal.fire ("Cliente guardado", `El cliente ${resp.cliente.nombre} ha sido guardado.`, 'success');
        this.cliente = new Cliente ('', '', '');
        this.router.navigate(['/clientes']);
      }, error => {
        this.guardando = false;
        Swal.fire("Error", "Error al guardar", "error");
      });

    }

  }

  seleccionImagen( archivo: File  ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf ( 'image') < 0 ){
      Swal.fire('Sólo imágenes', 'El archivo no es una imágen válida', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  cambiarImagen() {

    this.clienteService.cambiarImagen( this.imagenSubir, this.cliente._id )
    .then ( (resp: any ) => {
      if ( resp.ok ) {
        Swal.fire('Imagen actualizada', resp.mensaje, 'success');
        this.volver();
      }
    }).catch ( ( error ) => {
      Swal.fire('Error', 'Ha habido un error al actualizar la imagen', 'error');
    });

  }


  volver() {
    this.router.navigate(['/clientes']);
  }
}