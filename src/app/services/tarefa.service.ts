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
  private concluirUrl: string = 'http://localhost:8080/tarefas/concluir'; // URL base da API

  constructor(private http: HttpClient) { }

  criarTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cadastrar`, tarefa, { responseType: 'text' as 'json' });
  }

  listarTarefasPorUsuario(id: number): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}/${id}`);
  }

  obterTarefaPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/tarefa/${id}`);
  }

  editarTarefa(id: number, tarefa: Tarefa): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, tarefa, { responseType: 'text' as 'json' });
  }
  
  deletarTarefa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { responseType: 'text' as 'json' });
  }

  concluirTarefa(id: number): Observable<any> {
    return this.http.put<any>(`${this.concluirUrl}/${id}`, { responseType: 'text' as 'json' });
  }

  // Método de tratamento de erros
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}