import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './components/crud.component';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    data: { title: 'Order management' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
