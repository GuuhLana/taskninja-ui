import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['id', 'nome', 'login', 'acoes'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  editarUsuario(usuario: Usuario): void {
    // Lógica para editar o usuário
  }

  deletarUsuario(id: number): void {
    this.usuarioService.deletarUsuario(id)
      .subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u.id !== id);
      });
  }
}
