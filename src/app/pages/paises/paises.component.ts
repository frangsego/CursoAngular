import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];

  cargando = false;
  error = false;
  textoCargando = "Cargando. Espere...";

  displayedColumns: string[] = ['Nombre', 'Capital', 'Población', 'Bandera'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(this.paises);
  
  constructor(private paisesService: PaisesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises () {
    
    this.cargando = true;
    this.error = false;

    this.paisesService.getPaises().subscribe( paises => {
      this.paises = paises;
      this.cargando = false;
      
      // Mostrar mensaje
      this.dataSource = new MatTableDataSource(this.paises);
      this.dataSource.paginator = this.paginator;

      // console.log ( this.paises );
    }, error => {this.cargando = false; this.error = true; this.textoCargando = "Error en la carga"});

    this.openSnackBar();
  }
  
  openSnackBar() {
    this._snackBar.open('Paises cargados', 'Hecho', {
      duration: 2000,
    });
  }
}