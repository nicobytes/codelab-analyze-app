import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  },
  {
    path: 'pdf',
    loadChildren: './pdf/pdf.module#PdfModule'
  },
  {
    path: 'todos',
    loadChildren: './todos/todos.module#TodosModule'
  },
  {
    path: 'date',
    loadChildren: './date/date.module#DateModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
