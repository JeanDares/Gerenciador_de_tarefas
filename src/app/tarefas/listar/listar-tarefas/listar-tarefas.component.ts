import { Tarefa } from '../../shared/tarefa.model';
import { TarefaService } from './../../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor ( private TarefaService: TarefaService)  {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos()
  }

  listarTodos(): Tarefa[] {
    return this.TarefaService.listarTodos()

  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.TarefaService.remover(tarefa.id);
      this.tarefas = this.TarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.TarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.TarefaService.listarTodos();
    }
  }

}



