import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DateRoutingModule
  ]
})
export class DateModule { }
