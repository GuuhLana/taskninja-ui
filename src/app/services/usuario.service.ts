import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../interfaces/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = 'http://localhost:8080/usuarios'; // URL base da API

  constructor(private http: HttpClient) { }

  // Método para criar um novo usuário
  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/cadastrar`, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('criarUsuario'))
      );
  }

  // Método para listar todos os usuários
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`)
      .pipe(
        catchError(this.handleError<Usuario[]>('listarUsuarios', []))
      );
  }

  // Método para deletar um usuário pelo ID
  deletarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError<void>('deletarUsuario'))
      );
  }

  // Método para editar um usuário
  editarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/editar/${id}`, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('editarUsuario'))
      );
  }

  // Método de tratamento de erros
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
