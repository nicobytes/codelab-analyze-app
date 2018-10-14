import { Component, OnInit } from '@angular/core';

import { TodosService } from './../services/todos.service';
import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos = [
    {
      title: 'todo 1'
    },
    {
      title: 'todo 2'
    },
    {
      title: 'todo 3'
    }
  ];

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
  }

  updateTodo() {
    const todo: Todo = {
      title: 'titutlo',
      description: 'bla bla',
      date: new Date(),
      completed: false
    };
    this.todosService.updateTodo(todo);
  }

  updateTodoTitle() {
    const todo: Partial<Todo> = {
      title: 'titutlo',
    };
    this.todosService.updatePartialTodo(todo);
  }

}
