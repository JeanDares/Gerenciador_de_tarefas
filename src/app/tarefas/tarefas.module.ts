import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefasComponent } from './listar/listar-tarefas/listar-tarefas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './editar/editar-tarefa/editar-tarefa.component';
import { TarefaConclui3daDirective } from './shared/concluida/tarefa-concluida.directive';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConclui3daDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
