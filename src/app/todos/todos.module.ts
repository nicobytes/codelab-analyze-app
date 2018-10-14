import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { HomeComponent } from './home/home.component';
import { TodosService } from './../todos/services/todos.service';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [ TodosService ]
})
export class TodosModule { }
