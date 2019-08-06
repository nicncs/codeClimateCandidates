import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
// import { FormBuilder, NgForm } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { State } from '../examples.state';
import { Order } from '../order.model';
import { actionOrderDeleteOne, actionOrderUpsertOne } from '../order.actions';
import { selectSelectedOrder, selectAllOrders } from '../order.selectors';

@Component({
  selector: 'anms-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // bookFormGroup = this.fb.group(CrudComponent.createOrder());
  orders$: Observable<Order[]> = this.store.pipe(select(selectAllOrders));
  selectedOrder$: Observable<Order> = this.store.pipe(
    select(selectSelectedOrder)
  );
  isEditing: boolean;

  static createOrder(): Order {
    return {
      id: Math.random(),
      state: '',
      paymentId: Math.random(),
      quantity: Math.random(),
      totalPrice: Math.random()
      // description: ''
    };
  }

  constructor(
    public store: Store<State>,
    // public fb: FormBuilder,
    private router: Router
  ) {}

  select(order: Order) {
    this.isEditing = false;
    this.router.navigate(['order-management', order.id]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(['order-management']);
  }

  // addNew(orderForm: NgForm) {
  // orderForm.resetForm();
  // this.orderFormGroup.reset();
  // this.orderFormGroup.setValue(CrudComponent.createOrder());
  // this.isEditing = true;
  // console.log('add new');
  // }

  addNew() {
    console.log('add new');
  }

  cancelEditing() {
    this.isEditing = false;
  }

  cancelOrder() {}

  delete(order: Order) {
    this.store.dispatch(actionOrderDeleteOne({ id: order.id }));
    this.isEditing = false;
    this.router.navigate(['order-management']);
  }
}
