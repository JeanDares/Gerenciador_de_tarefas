import { Routes } from "@angular/router";
import { ListarTarefasComponent  } from "./listar/listar-tarefas/listar-tarefas.component";
import { Component } from "@angular/core";
import { CadastrarTarefasComponent } from "./cadastrar/cadastrar-tarefas/cadastrar-tarefas.component";


export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefa/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefasComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefasComponent
  }
];
