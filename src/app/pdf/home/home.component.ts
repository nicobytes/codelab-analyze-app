
import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

// import { LoggerService } from './../../core/services/logger.service';
import { LoggerService } from '@core/services/logger.service';

@Component({
  selector: 'app-home',
  template: `
    <h1>pdf</h1>
    <button type="button" (click)="generatePdf()">build pdf</button>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePdf() {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }

}
