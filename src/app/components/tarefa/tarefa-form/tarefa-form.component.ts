import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/interfaces/Tarefa';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {

  tarefas: Tarefa[] = [];
  displayedColumns: string[] = ['nome', 'descricao', 'acoes'];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(): void {
    this.tarefaService.listarTarefas()
      .subscribe(tarefas => this.tarefas = tarefas);
  }

  editarTarefa(tarefa: Tarefa): void {
    // Lógica para editar a tarefa
  }

  deletarTarefa(id: number): void {
    this.tarefaService.deletarTarefa(id)
      .subscribe(() => {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
      });
  }
}
