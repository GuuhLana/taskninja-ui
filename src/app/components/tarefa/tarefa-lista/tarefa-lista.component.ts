import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarefa } from 'src/app/interfaces/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})

export class TarefaListaComponent implements OnInit {
  tarefas: Tarefa[] = [];
  displayedColumns: string[] = ['id', 'nomeTarefa', 'observacao', 'status', 'prioridade', 'acoes'];

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas(): void {
    //A FAZER
    // Substitua pelo ID do usuário que você deseja listar as tarefas
    const usuarioId = 1;

    this.tarefaService.listarTarefasPorUsuario(usuarioId).subscribe(
      (data: Tarefa[]) => {
        this.tarefas = data;
      },
      (error) => {
        console.error('Erro ao carregar tarefas:', error);
        this.snackBar.open('Erro ao carregar tarefas', 'Fechar', { duration: 3000 });
      }
    );
  }

  deletarTarefa(id: number): void {
    this.tarefaService.deletarTarefa(id).subscribe(
      () => {
        this.snackBar.open('Tarefa deletada com sucesso', 'Fechar', { duration: 3000 });
        this.loadTarefas();
      },
      (error) => {
        console.error('Erro ao deletar tarefa:', error);
        this.snackBar.open('Erro ao deletar tarefa', 'Fechar', { duration: 3000 });
      }
    );
  }

  editarTarefa(id: number): void {
    this.router.navigate(['tarefas/editar/', id]);
  }

  navigateToCadastro(): void {
    this.router.navigate(['/tarefas/cadastrar']);
  }
}
