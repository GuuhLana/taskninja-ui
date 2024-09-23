import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/interfaces/Tarefa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {
  tarefaForm: FormGroup;
  isEditMode = false;
  tarefaId: number | null = null;

  statusOptions = [
    { value: 'NAO_INICIADO', viewValue: 'Não Iniciado' },
    { value: 'EM_ANDAMENTO', viewValue: 'Em Andamento' },
    { value: 'IMPEDIDO', viewValue: 'Impedido' },
    { value: 'CONCLUIDO', viewValue: 'Concluído' }
  ];

  prioridadeOptions = [
    { value: 'BAIXA', viewValue: 'Baixa' },
    { value: 'MEDIA', viewValue: 'Média' },
    { value: 'ALTA', viewValue: 'Alta' }
  ];

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.tarefaForm = this.fb.group({
      nomeTarefa: ['', Validators.required],
      observacao: ['', Validators.required],
      usuarioId: ['', Validators.required],
      status: ['', Validators.required],
      prioridade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.tarefaId = +params['id'];
        this.loadTarefa(this.tarefaId);
      }
    });
  }

  returnToList(){
    this.router.navigate(['/tarefas']);
  }

  loadTarefa(id: number) {
    this.tarefaService.obterTarefaPorId(id).subscribe((tarefa: Tarefa) => {
      this.tarefaForm.patchValue(tarefa);
    });
  }

  onSubmit() {
    if (this.tarefaForm.invalid) {
        return;
    }

    const tarefa: Tarefa = this.tarefaForm.value;
    console.log('Nome enviado:', tarefa.nomeTarefa); // Verifique os dados aqui

    if (this.isEditMode && this.tarefaId !== null) {
        this.tarefaService.editarTarefa(this.tarefaId, tarefa).subscribe(response => {
            this.snackBar.open('Tarefa atualizada com sucesso', 'Fechar', { duration: 3000 });
            this.router.navigate(['/tarefas']);
        }, error => {
            this.snackBar.open('Erro ao atualizar tarefa', 'Fechar', { duration: 3000 });
        });
    } else {
        this.tarefaService.criarTarefa(tarefa).subscribe(response => {
            this.snackBar.open(response, 'Fechar', { duration: 3000 });
            this.router.navigate(['/tarefas']);
        }, error => {
            this.snackBar.open('Erro ao criar tarefa', 'Fechar', { duration: 3000 });
        });
    }
  }
}