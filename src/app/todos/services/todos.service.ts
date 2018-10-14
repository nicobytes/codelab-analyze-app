import { Injectable } from '@angular/core';

import { Todo } from './../models/todo.model';

@Injectable()
export class TodosService {

  constructor() { }

  updateTodo(todo: Todo) {
    // update todo
  }

  updatePartialTodo(todo: Partial<Todo>) {
    // update todo
  }
}
