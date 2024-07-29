import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { TarefaListaComponent } from './components/tarefa/tarefa-lista/tarefa-lista.component';
import { TarefaFormComponent } from './components/tarefa/tarefa-form/tarefa-form.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioFormComponent,
    TarefaListaComponent,
    TarefaFormComponent,
    UsuarioListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
