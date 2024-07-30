import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tarefa } from '../interfaces/Tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private baseUrl: string = 'http://localhost:8080/tarefas'; // URL base da API

  constructor(private http: HttpClient) { }

  // Método para listar todas as tarefas
  listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}`)
      .pipe(
        catchError(this.handleError<Tarefa[]>('listarTarefas', []))
      );
  }

  // Método para criar uma nova tarefa
  criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseUrl}/cadastrar`, tarefa)
      .pipe(
        catchError(this.handleError<Tarefa>('criarTarefa'))
      );
  }

  // Método para deletar uma tarefa pelo ID
  deletarTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError<void>('deletarTarefa'))
      );
  }

  // Método para editar uma tarefa
  editarTarefa(id: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.baseUrl}/editar/${id}`, tarefa)
      .pipe(
        catchError(this.handleError<Tarefa>('editarTarefa'))
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