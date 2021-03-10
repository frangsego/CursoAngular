import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { PaisesComponent } from './pages/paises/paises.component';

import { PipesComponent } from './pages/pipes/pipes.component';
import { AlrevesPipe } from './pipes/alreves.pipe';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Módulo de componentes de material
import { MaterialModule } from './material/material.module';

//Configuración del idioma
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
registerLocaleData ( localeES );


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemarioComponent,
    DirectivasComponent,
    TarjetaComponent,
    PipesComponent,
    AlrevesPipe,
    PaisesComponent,
    ClientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MaterialModule
  ],
  providers: [
    {
     provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
