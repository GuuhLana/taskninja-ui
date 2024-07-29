import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { TarefaListaComponent } from './components/tarefa/tarefa-lista/tarefa-lista.component';
import { TarefaFormComponent } from './components/tarefa/tarefa-form/tarefa-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lista-usuario', component: UsuarioListaComponent },
  { path: 'formulario-usuario', component: UsuarioFormComponent },
  { path: 'lista-tarefa', component: TarefaListaComponent },
  { path: 'formulario-tarefa', component: TarefaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }