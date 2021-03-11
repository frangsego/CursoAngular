import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public usuarioService: UsuarioService) { }

  titulo = 'Curso Angular Ed. 2 (Fran)';

  ngOnInit(): void {
  }

}
