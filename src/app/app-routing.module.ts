import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { GraficaComponent } from './pages/grafica/grafica.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'temario', component: TemarioComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'grafica', component: GraficaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
