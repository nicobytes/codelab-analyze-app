import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>charts</h1>

    <ngx-charts-bar-vertical
      [view]="view"
      [results]="single"
      [gradient]="true"
      [xAxis]="true"
      [yAxis]="true">
    </ngx-charts-bar-vertical>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  view = [400, 400];

  single = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
