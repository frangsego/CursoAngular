import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Para peticiones http
import { HttpClientModule } from '@angular/common/http';

// Mis componentes
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ModalComponent } from './components/modal/modal.component';
import { TemplateComponent } from './pages/formularios/template/template.component';
import { ReactivosComponent } from './pages/formularios/reactivos/reactivos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

// Pipes
import { PipesModule } from './pipes/pipes.module';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { URL_SOCKET } from './../environments/environment';

// Módulo de componentes de 'material'
import { MaterialModule } from './material/material.module';

// Configuración del idioma
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TipoVehiculosComponent } from './pages/tipo-vehiculos/tipo-vehiculos.component';

// Para los sockets
const config: SocketIoConfig = { url: URL_SOCKET, options: {} };

// Para el idioma
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
    PaisesComponent,
    ClientesComponent,
    ClienteComponent,
    GraficaComponent,
    ModalComponent,
    UsuarioComponent,
    TipoVehiculosComponent,
    TemplateComponent,
    ReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    PipesModule,
    MaterialModule,
    ChartsModule, 
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
     provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
