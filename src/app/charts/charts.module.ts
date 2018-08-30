import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxChartsModule
  ],
  declarations: [HomeComponent]
})
export class ChartsModule { }
