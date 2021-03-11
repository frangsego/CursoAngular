import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  exports: [
    MatSnackBarModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatButtonModule
  ], 
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
