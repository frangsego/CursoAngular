import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private usuarioService:  UsuarioService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
//      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 
      {
        //console.log ( 'Pasando por el guard' );
        //console.log ( state )

        if (!this.usuarioService.estaAutenticado ())
        {
          //console.log ( 'No está autenticado' );
          Swal.fire('Autenticación', 'Tienes que estar autenticado para ver este recurso', 'info');
          this.router.navigateByUrl('/home');
          return false;
        }
        //console.log ( 'Está autenticado' );
        return true;
      }

}
