import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CrudComponent } from './components/crud.component';
import { OrderRoutingModule } from './order.routing.module';

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, SharedModule, OrderRoutingModule]
})
export class OrderModule {}
