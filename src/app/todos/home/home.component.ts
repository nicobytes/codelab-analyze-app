import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>todos</h1>

    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.title}}
      </li>
    </ul>
  `,
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

  constructor() { }

  ngOnInit() {
  }

}
