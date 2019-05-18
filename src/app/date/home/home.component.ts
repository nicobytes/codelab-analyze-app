import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-home',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {
    this.date = moment().add(20, 'days').format('YYYY/MMMM/DD');
  }

}
