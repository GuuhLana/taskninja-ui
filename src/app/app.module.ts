import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Imports do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort'; // Adicionado
import { MatPaginatorModule } from '@angular/material/paginator'; // Adicionado

import { LoginComponent } from './components/login/login.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { TarefaListaComponent } from './components/tarefa/tarefa-lista/tarefa-lista.component';
import { TarefaFormComponent } from './components/tarefa/tarefa-form/tarefa-form.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';

import { UsuarioService } from './services/usuario.service';
import { TarefaService } from './services/tarefa.service';



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
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
