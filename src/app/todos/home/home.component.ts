import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
