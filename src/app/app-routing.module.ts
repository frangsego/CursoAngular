import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'temario', component: TemarioComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
